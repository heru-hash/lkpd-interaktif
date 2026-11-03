import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { ChatMessage } from '../types';
import {
  MessageSquare,
  Send,
  Image as ImageIcon,
  Paperclip,
  Users,
  Search,
  CheckCheck,
  Smile,
  X
} from 'lucide-react';

export const ChatPage: React.FC = () => {
  const { messages, sendMessage, classes, teachers, students } = useData();
  const { currentUser, role } = useAuth();

  const [activeChannelId, setActiveChannelId] = useState<string>('class-01');
  const [inputText, setInputText] = useState('');
  const [attachedFile, setAttachedFile] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const channels = [
    { id: 'class-01', name: 'Diskusi Kelas X PPLG 1', type: 'class', memberCount: 36 },
    { id: 'class-02', name: 'Diskusi Kelas X PPLG 2', type: 'class', memberCount: 34 },
    { id: 'direct-guru', name: 'Konsultasi Belajar Guru & Murid', type: 'direct', memberCount: 2 },
  ];

  const activeChannel = channels.find((c) => c.id === activeChannelId) || channels[0];
  const channelMessages = messages.filter((m) => m.channelId === activeChannelId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channelMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() && !attachedFile) return;

    sendMessage(
      activeChannelId,
      inputText,
      currentUser,
      attachedFile ? 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600' : undefined,
      attachedFile || undefined
    );

    setInputText('');
    setAttachedFile(null);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              KOMUNIKASI REALTIME
            </span>
            <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              FIRESTORE SYNC
            </span>
          </div>
          <h1 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white">
            Ruang Diskusi & Konsultasi Belajar Daring
          </h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Fasilitas tanya-jawab interaktif antar guru dan peserta didik seputar materi dan LKPD.
          </p>
        </div>
      </div>

      {/* Main Chat Box Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[650px] rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Left Sidebar: Channels */}
        <div className="border-r border-slate-200 p-4 dark:border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Saluran Diskusi
            </span>

            <div className="space-y-1.5">
              {channels.map((ch) => {
                const isActive = ch.id === activeChannelId;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannelId(ch.id)}
                    className={`flex w-full items-center justify-between rounded-xl p-3 text-left transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`rounded-lg p-2 ${isActive ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-800'}`}>
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="truncate">
                        <p className="truncate text-xs">{ch.name}</p>
                        <p className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          {ch.memberCount} Anggota
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600 dark:bg-slate-800/60 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
            <p className="font-bold text-slate-800 dark:text-slate-200">Etika Chat Sekolah:</p>
            <p className="text-[10px] mt-0.5">Gunakan bahasa yang santun dan fokus pada pembahasan materi LKPD.</p>
          </div>
        </div>

        {/* Right Area: Messages & Input */}
        <div className="md:col-span-2 flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/50">
          {/* Channel Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3.5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {activeChannel.name}
              </h3>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Saluran Aktif • SMKN 1 Sidayu
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {activeChannel.memberCount} Peserta
            </span>
          </div>

          {/* Messages Flow */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {channelMessages.map((msg) => {
              const isMe = msg.senderId === currentUser.uid;

              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 max-w-[85%] ${
                    isMe ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  <img
                    src={msg.senderAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=250'}
                    alt={msg.senderName}
                    className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-300 dark:ring-slate-700 shrink-0"
                  />

                  <div
                    className={`rounded-2xl p-3.5 text-xs shadow-xs ${
                      isMe
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span
                        className={`text-[11px] font-bold ${
                          isMe ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        {msg.senderName}
                      </span>
                      <span
                        className={`text-[9px] ${
                          isMe ? 'text-blue-200' : 'text-slate-400'
                        }`}
                      >
                        {new Date(msg.timestamp).toLocaleTimeString('id-ID', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>

                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                    {msg.fileName && (
                      <div className="mt-2 rounded-lg bg-black/10 p-2 flex items-center gap-2 text-[11px]">
                        <Paperclip className="h-3.5 w-3.5" />
                        <span className="truncate">{msg.fileName}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Attachment Preview if any */}
          {attachedFile && (
            <div className="px-4 py-2 bg-blue-50 dark:bg-blue-950/40 border-t border-blue-200 flex items-center justify-between text-xs text-blue-700 dark:text-blue-300">
              <span className="flex items-center gap-1.5 font-semibold">
                <Paperclip className="h-3.5 w-3.5" /> Lampiran: {attachedFile}
              </span>
              <button onClick={() => setAttachedFile(null)} className="text-slate-400 hover:text-slate-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Chat Input Bar */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={() => setAttachedFile('Screenshot_Uji_Prompt.png')}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600"
              title="Kirim Gambar / Screenshot"
            >
              <ImageIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setAttachedFile('Dokumen_Praktik_LKPD.pdf')}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600"
              title="Lampirkan File"
            >
              <Paperclip className="h-5 w-5" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ketik pertanyaan atau tanggapan diskusi di sini..."
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-800 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <button
              type="submit"
              disabled={!inputText.trim() && !attachedFile}
              className="flex items-center justify-center rounded-xl bg-blue-600 p-2.5 text-white shadow-md shadow-blue-600/30 hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
