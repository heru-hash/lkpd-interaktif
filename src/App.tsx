import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

import { DashboardGuru } from './pages/DashboardGuru';
import { DashboardMurid } from './pages/DashboardMurid';
import { DashboardKepsek } from './pages/DashboardKepsek';
import { DashboardAdmin } from './pages/DashboardAdmin';

import { ClassPage } from './pages/ClassPage';
import { CPManagement } from './pages/CPManagement';
import { TPManagement } from './pages/TPManagement';
import { LKPDPage } from './pages/LKPDPage';
import { MateriPage } from './pages/MateriPage';
import { TugasPage } from './pages/TugasPage';
import { PenilaianPage } from './pages/PenilaianPage';
import { NilaiSayaPage } from './pages/NilaiSayaPage';
import { ProgressPage } from './pages/ProgressPage';
import { ChatPage } from './pages/ChatPage';
import { LaporanPage } from './pages/LaporanPage';
import { PengaturanPage } from './pages/PengaturanPage';
import { GuruDanMapelPage } from './pages/GuruDanMapelPage';
import { Login } from './pages/Login';

// Main Home Switcher based on active user role
const RoleHome: React.FC = () => {
  const { role } = useAuth();
  switch (role) {
    case 'guru':
      return <DashboardGuru />;
    case 'murid':
      return <DashboardMurid />;
    case 'kepsek':
      return <DashboardKepsek />;
    case 'admin':
      return <DashboardAdmin />;
    default:
      return <DashboardGuru />;
  }
};

// Main App Layout Wrapper
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="lg:pl-64 min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <MainLayout>{children}</MainLayout>;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
      />

      {/* Application Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <RoleHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guru-mapel"
        element={
          <ProtectedRoute>
            <GuruDanMapelPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kelas"
        element={
          <ProtectedRoute>
            <ClassPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cp"
        element={
          <ProtectedRoute>
            <CPManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tp"
        element={
          <ProtectedRoute>
            <TPManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lkpd"
        element={
          <ProtectedRoute>
            <LKPDPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/materi"
        element={
          <ProtectedRoute>
            <MateriPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tugas"
        element={
          <ProtectedRoute>
            <TugasPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/penilaian"
        element={
          <ProtectedRoute>
            <PenilaianPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/nilai-saya"
        element={
          <ProtectedRoute>
            <NilaiSayaPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <ProgressPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/laporan"
        element={
          <ProtectedRoute>
            <LaporanPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pengaturan"
        element={
          <ProtectedRoute>
            <PengaturanPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <DashboardAdmin />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

