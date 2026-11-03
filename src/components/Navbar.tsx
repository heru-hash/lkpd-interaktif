import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { UserRole } from '../types';
import {
  Bell,
  Sun,
  Moon,
  GraduationCap,
  Shield,
  UserCheck,
  BookOpen,
  LogOut,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfilePhotoModal } from './ProfilePhotoModal';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { currentUser, role, isDarkMode, toggleDarkMode, switchRole, logout } = useAuth();
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useData();

  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Filter notifications for current user or broad
  const userNotifs = notifications.filter((n) => n.userId === currentUser.uid || n.userId === 'all');
  const unreadCount = userNotifs.filter((n) => !n.read).length;

  const roleLabels: Record<UserRole, { label: string; color: string; icon: any }> = {
    guru: { label: 'GURU PENGAMPU', color: 'bg-blue-600 text-white', icon: BookOpen },
    murid: { label: 'PESERTA DIDIK', color: 'bg-emerald-600 text-white', icon: GraduationCap },
    admin: { label: 'ADMINISTRATOR', color: 'bg-purple-600 text-white', icon: Shield },
    kepsek: { label: 'KEPALA SEKOLAH', color: 'bg-amber-600 text-white', icon: UserCheck },
  };

  const CurrentRoleIcon = roleLabels[role]?.icon || BookOpen;

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 sm:px-6">
      {/* Brand / Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
          title="Toggle Navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">SI-LKPD</span>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold tracking-wide text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                SMKN 1 SIDAYU
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Sistem LKPD Interaktif & Pembelajaran Daring
            </p>
          </div>
        </Link>
      </div>

      {/* Role Switcher Demo Bar (Crucial for testing all 4 roles effortlessly) */}
      <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-100 p-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <span className="text-[11px] font-semibold text-slate-500 px-2 dark:text-slate-400 flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-orange-500" /> Mode Demo:
        </span>
        {(['guru', 'murid', 'admin', 'kepsek'] as UserRole[]).map((r) => {
          const isActive = role === r;
          return (
            <button
              key={r}
              onClick={() => switchRole(r)}
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {r === 'kepsek' ? 'Kepsek' : r}
            </button>
          );
        })}
      </div>

      {/* Actions (Notif, Theme, User) */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
        >
          {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifDropdown(!showNotifDropdown)}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            title="Pemberitahuan"
          >
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[9px] font-bold text-white shadow-sm animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notif Dropdown */}
          {showNotifDropdown && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Notifikasi</span>
                  {unreadCount > 0 && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      {unreadCount} baru
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsAsRead}
                    className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Tandai dibaca
                  </button>
                )}
              </div>

              <div className="mt-2 max-h-72 overflow-y-auto space-y-2">
                {userNotifs.length === 0 ? (
                  <p className="py-6 text-center text-xs text-slate-400">Tidak ada notifikasi baru</p>
                ) : (
                  userNotifs.slice(0, 6).map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationAsRead(n.id)}
                      className={`cursor-pointer rounded-xl p-2.5 transition-colors ${
                        n.read
                          ? 'bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60'
                          : 'bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">{n.title}</p>
                        <span className="text-[10px] text-slate-400">
                          {new Date(n.createdAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2">{n.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile & Role Info */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 rounded-xl border border-slate-200 p-1.5 transition-all hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <img
              src={currentUser.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=250'}
              alt={currentUser.displayName}
              className="h-7 w-7 rounded-lg object-cover ring-1 ring-blue-500/30"
            />
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 max-w-[120px] truncate">
                {currentUser.displayName}
              </p>
              <span className={`inline-block text-[9px] font-bold px-1.5 py-0.2 rounded ${roleLabels[role]?.color}`}>
                {role.toUpperCase()}
              </span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {/* User Menu Modal */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
              <div className="p-2 border-b border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-900 dark:text-white">{currentUser.displayName}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{currentUser.email}</p>
                {currentUser.nisn && (
                  <p className="mt-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    NISN: {currentUser.nisn} • {currentUser.className}
                  </p>
                )}
                {currentUser.nip && (
                  <p className="mt-1 text-[10px] font-medium text-blue-600 dark:text-blue-400">
                    NIP: {currentUser.nip}
                  </p>
                )}
              </div>

              {/* Mobile Role Switcher */}
              <div className="p-2 md:hidden border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Pilih Peran Demo:
                </span>
                <div className="grid grid-cols-2 gap-1">
                  {(['guru', 'murid', 'admin', 'kepsek'] as UserRole[]).map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        switchRole(r);
                        setShowUserMenu(false);
                      }}
                      className={`text-[11px] font-medium rounded-lg p-1.5 capitalize text-left ${
                        role === r ? 'bg-blue-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-1">
                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    setShowPhotoModal(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/40 font-semibold"
                >
                  <Camera className="h-3.5 w-3.5" />
                  Ganti Foto Profil
                </button>
                <Link
                  to="/pengaturan"
                  onClick={() => setShowUserMenu(false)}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <CurrentRoleIcon className="h-3.5 w-3.5" />
                  Profil & Pengaturan
                </Link>
                <button
                  onClick={() => {
                    setShowUserMenu(false);
                    logout();
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Keluar / Ganti Akun
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ProfilePhotoModal
        isOpen={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
      />
    </header>
  );

};
