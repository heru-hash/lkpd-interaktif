import {
  UserProfile,
  ClassGroup,
  CapaianPembelajaran,
  TujuanPembelajaran,
  LearningMaterial,
  Rubric,
  InteractiveLKPD,
  Assignment,
  Submission,
  Score,
  NotificationItem,
  ChatMessage,
  Announcement,
  SubjectItem
} from '../types';

// ==========================================
// DAFTAR 17 MATA PELAJARAN RESMI SMKN 1 SIDAYU
// (Sesuai Lampiran Dokumen Kurikulum Sekolah)
// ==========================================
export const OFFICIAL_SUBJECTS: SubjectItem[] = [
  { id: 'mapel-01', name: 'Pendidikan Agama dan Budi Pekerti', category: 'Umum' },
  { id: 'mapel-02', name: 'Pendidikan Pancasila', category: 'Umum' },
  { id: 'mapel-03', name: 'Bahasa Indonesia', category: 'Umum' },
  { id: 'mapel-04', name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan', category: 'Umum' },
  { id: 'mapel-05', name: 'Sejarah', category: 'Umum' },
  { id: 'mapel-06', name: 'Seni Budaya', category: 'Umum' },
  { id: 'mapel-07', name: 'Bahasa Jawa', category: 'Muatan Lokal / Khusus' },
  { id: 'mapel-08', name: 'Matematika', category: 'Umum' },
  { id: 'mapel-09', name: 'Bahasa Inggris', category: 'Umum' },
  { id: 'mapel-10', name: 'Informatika', category: 'Kejuruan' },
  { id: 'mapel-11', name: 'Projek Ilmu Pengetahuan Alam dan Sosial', category: 'Umum' },
  { id: 'mapel-12', name: 'Dasar-dasar Program Keahlian', category: 'Kejuruan' },
  { id: 'mapel-13', name: 'Mata Pelajaran Konsentrasi Keahlian', category: 'Kejuruan' },
  { id: 'mapel-14', name: 'Kreativitas, Inovasi, dan Kewirausahaan', category: 'Kejuruan' },
  { id: 'mapel-15', name: 'Mata Pelajaran Pilihan', category: 'Pilihan' },
  { id: 'mapel-16', name: 'Bimbingan Konseling', category: 'Bimbingan' },
  { id: 'mapel-17', name: 'Koding dan Kecerdasan Artifisial', category: 'Kejuruan' },
];

// ==========================================
// DAFTAR 65 GURU LENGKAP DENGAN NIP SMKN 1 SIDAYU
// (Sesuai SK / Data Pendidik Resmi Sekolah)
// ==========================================
export const OFFICIAL_TEACHERS: { name: string; nip: string; mapel?: string }[] = [
  { name: 'Ummatul Khoiriyah S.Ag.', nip: '19710426 200502 2 005', mapel: 'Pendidikan Agama dan Budi Pekerti' },
  { name: "Ahmad In'amul Mujib S.Pd., M.Pd.", nip: '19761023 200012 1 001', mapel: 'Matematika' },
  { name: 'Hadi Waluyo Budiono, S.Pd', nip: '19700117 200501 1 005', mapel: 'Bahasa Indonesia' },
  { name: 'H. Mahfud Afandi, S.Ag; M.Pd.I.', nip: '19720117 200501 1 006', mapel: 'Pendidikan Agama dan Budi Pekerti' },
  { name: 'Badrul Huda, S.Pi.', nip: '19770727 200604 1 023', mapel: 'Dasar-dasar Program Keahlian (APHPi)' },
  { name: 'Rita Fajriyah S.Si.', nip: '19780405 200604 2 034', mapel: 'Projek Ilmu Pengetahuan Alam dan Sosial' },
  { name: 'Zaidatul Rokhmah S.Pd.', nip: '19750403 200604 2 022', mapel: 'Bahasa Inggris' },
  { name: 'Yayuk Sri Rahayu, S.Pd., M.Pd.', nip: '19741225 200801 2 008', mapel: 'Bahasa Indonesia' },
  { name: 'Raden Ayu Eva Amelia Darmawan, S.Pd.', nip: '19820814 200901 2 005', mapel: 'Matematika' },
  { name: 'Suhermin Ningtias, S.Pd.', nip: '19830116 200901 2 003', mapel: 'Sejarah' },
  { name: 'Siti Muthoharoh, S.Pd.I.', nip: '19840824 200901 2 004', mapel: 'Pendidikan Agama dan Budi Pekerti' },
  { name: 'Urip Hanjuni Widayanto, S.S.', nip: '19770615 200901 1 010', mapel: 'Bahasa Inggris' },
  { name: 'Dwi Nur Aini, S.Pd., M.Pd.', nip: '19831119 201101 2 008', mapel: 'Bahasa Indonesia' },
  { name: 'Yuni Kusfiana, S.Kom.', nip: '19750727 201001 2 003', mapel: 'Informatika' },
  { name: 'Khomsan, S. Pd', nip: '19730414 200801 1 016', mapel: 'Pendidikan Jasmani, Olahraga, dan Kesehatan' },
  { name: 'Budi Subiyanto, S.Kom.', nip: '19781020 201101 1 006', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKJ)' },
  { name: 'Nofi Nurul Mujahidin, S.Pi.', nip: '19701121 200501 1 007', mapel: 'Dasar-dasar Program Keahlian (APHPi)' },
  { name: 'Kiswanto, S.Pd, M.M.', nip: '19751115 200604 1 011', mapel: 'Pendidikan Pancasila' },
  { name: 'Imam Samhudi, S. Pd', nip: '19740211 200604 1 007', mapel: 'Dasar-dasar Program Keahlian (TKR)' },
  { name: 'Laili Mahbubah, S.Pd.', nip: '19770713 200801 2 015', mapel: 'Matematika' },
  { name: 'Sri Rejeki, S.Pd.', nip: '19700305 200801 2 018', mapel: 'Bahasa Jawa' },
  { name: 'H. Ahmad Shofi, S.Pd., M.Pd.', nip: '19870103 200901 1 001', mapel: 'Pendidikan Agama dan Budi Pekerti' },
  { name: 'Mochamad Faisol Karim, S.Pd.', nip: '19780626 201001 1 002', mapel: 'Pendidikan Jasmani, Olahraga, dan Kesehatan' },
  { name: 'Rahmat Syah, S.Or.', nip: '19850323 200901 1 005', mapel: 'Pendidikan Jasmani, Olahraga, dan Kesehatan' },
  { name: 'Didik Kiswoyo, S.Kom', nip: '19781206 201101 1 003', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKJ)' },
  { name: 'Hentik Lindawati, S.Pd., Gr.', nip: '19920719 201903 2 016', mapel: 'Bahasa Indonesia' },
  { name: 'Sidi Muhammad Muadz Dzin Asis Hawaya, S.Pd.', nip: '19930412 201903 1 010', mapel: 'Seni Budaya' },
  { name: 'Heni Hamdiyah, S.Tr.Pi.', nip: '19940527 201903 2 016', mapel: 'Mata Pelajaran Konsentrasi Keahlian (APHPi)' },
  { name: 'Pangesti Budi Purbasari, S. Pd', nip: '19870718 202012 2 013', mapel: 'Bimbingan Konseling' },
  { name: 'Fitria Tahta Al Fina, S. Pi, Gr', nip: '19940207 202012 2 023', mapel: 'Dasar-dasar Program Keahlian (APHPi)' },
  { name: 'Muhammad Syaiful Alam Al Ghozaly, S.Pd.', nip: '19941207 202012 1 006', mapel: 'Sejarah' },
  { name: 'Muh. Amri Mukhtarifin, S.Pd., Gr', nip: '19880925 202012 1 007', mapel: 'Pendidikan Pancasila' },
  { name: 'Suprianto, S.Pi.', nip: '19770323 202221 1 006', mapel: 'Mata Pelajaran Konsentrasi Keahlian (APHPi)' },
  { name: 'Syamsul Wakhid, S.Pd.', nip: '19820909 202221 1 019', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKR)' },
  { name: 'Aan Kurniawan, S.Pd., Gr.', nip: '19820713 202221 1 008', mapel: 'Dasar-dasar Program Keahlian (TKR)' },
  { name: 'Efendi Suryo Nugroho, S.Pd., Gr.', nip: '19851108 202221 1 017', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKR)' },
  { name: 'Rio Candra Hardiansyah, S.Pd., Gr', nip: '19860114 202221 1 021', mapel: 'Pendidikan Jasmani, Olahraga, dan Kesehatan' },
  { name: 'Moch. Husnul Haris, S.Pd., Gr.', nip: '19890823 202221 1 009', mapel: 'Dasar-dasar Program Keahlian (TITL)' },
  { name: 'Meylisa Eka Sangputri, S.ST., Gr', nip: '19940515 202221 2 017', mapel: 'Kreativitas, Inovasi, dan Kewirausahaan' },
  { name: 'Teguh Prasetyadi, S.H', nip: '19820928 202221 1 015', mapel: 'Pendidikan Pancasila' },
  { name: 'Akmaludin, S.Pd., Gr.', nip: '19840810 202221 1 018', mapel: 'Bahasa Jawa' },
  { name: 'Fathul Falahil Amin, S.Pd., Gr.', nip: '19880801 202221 1 014', mapel: 'Matematika' },
  { name: 'Walidatul Halimah, S.Pd., Gr.', nip: '19890705 202221 2 022', mapel: 'Bahasa Inggris' },
  { name: 'Wahyu Dwi Nanda, S.Pd', nip: '19930506 202221 2 024', mapel: 'Projek Ilmu Pengetahuan Alam dan Sosial' },
  { name: 'Irnawati, S.Pd., Gr', nip: '19830326 202421 2 019', mapel: 'Bimbingan Konseling' },
  { name: 'Rizqi Rahmatullah, S.Pd., Gr', nip: '19890907 202421 1 018', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKR)' },
  { name: 'Fardha Faya Dhoni Rohma, S.Pd., Gr', nip: '19910923 202321 2 034', mapel: 'Bahasa Indonesia' },
  { name: 'Ety Eriyanti, S.Pd', nip: '19871005 202421 2 003', mapel: 'Matematika' },
  { name: 'Muhammad Rif\'ad Mutawakkil, S.Pd', nip: '19940706 202421 1 025', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TITL)' },
  { name: 'Nurul Huda, S.Pd', nip: '19790421 202421 1 004', mapel: 'Pendidikan Agama dan Budi Pekerti' },
  { name: 'Rahmat Hidayat, S.Pd.', nip: '19810603 202421 1 005', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKR)' },
  { name: 'Zumrotun Nisa\', S.Pd., Gr', nip: '19820725 202421 2 008', mapel: 'Matematika' },
  { name: 'Faidiyatul Indah, S.Pd', nip: '19830815 202421 2 016', mapel: 'Bahasa Inggris' },
  { name: 'Alfian Arif Bintara, S.Pd.', nip: '19910802 202421 1 021', mapel: 'Seni Budaya' },
  { name: 'Choiruddin, S.Pd.I.', nip: '19831027 202521 1 020', mapel: 'Pendidikan Agama dan Budi Pekerti' },
  { name: 'Abdul Arif Zen, S.Kom., Gr', nip: '19890920 202521 1 025', mapel: 'Informatika' },
  { name: 'Miftaku Rohman, S.T.', nip: '19891017 202521 1 029', mapel: 'Dasar-dasar Program Keahlian (TITL)' },
  { name: 'Ahmad Heru Wahyu Wibowo, S.Pd', nip: '19831216 202421 1 002', mapel: 'Koding dan Kecerdasan Artifisial' },
  { name: 'Ir. Anang Dwi Darmawan', nip: '19690706 202521 1 046', mapel: 'Mata Pelajaran Konsentrasi Keahlian (TKR)' },
  { name: 'Siti Fatmawati, S.Pi.', nip: '-', mapel: 'Dasar-dasar Program Keahlian (APHPi)' },
  { name: 'Lailatul Anifah, S.Pd', nip: '19831001 202521 2 065', mapel: 'Bahasa Inggris' },
  { name: 'Ludiyanto, S.Kom.', nip: '19861231 202521 1 254', mapel: 'Informatika' },
  { name: 'Nurul Aisyah, S.Pd.', nip: '19890811 202521 2 098', mapel: 'Bahasa Indonesia' },
  { name: 'Novi Rozilawati Nur Fazlin, S.Pd', nip: '-', mapel: 'Bimbingan Konseling' },
  { name: 'Dwi Maulida, S.Pd., Gr', nip: '19901001 202221 2 016', mapel: 'Kreativitas, Inovasi, dan Kewirausahaan' },
];

// Generate User Profiles for Teachers
export const INITIAL_TEACHERS: UserProfile[] = OFFICIAL_TEACHERS.map((t, idx) => ({
  uid: `guru-${idx + 1}`,
  email: t.name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 12) + '@guru.smkn1sidayu.sch.id',
  displayName: t.name,
  role: 'guru',
  password: 'guru123',
  nip: t.nip,
  major: t.mapel || 'Pengajar SMKN 1 Sidayu',
  subject: t.mapel || 'Pengajar SMKN 1 Sidayu',
  subjectsTaught: t.mapel ? [t.mapel] : ['Pengajar SMKN 1 Sidayu'],
  avatarUrl: `https://images.unsplash.com/photo-${1500000000000 + (idx * 111111) % 500000000}?auto=format&fit=crop&q=80&w=250`
}));

// Primary active teacher: Ahmad Heru Wahyu Wibowo, S.Pd (teaches 2 mapel: Koding & AI + Informatika)
const primaryTeacher = INITIAL_TEACHERS.find(t => t.displayName.includes('Ahmad Heru Wahyu Wibowo')) || INITIAL_TEACHERS[57];
primaryTeacher.email = 'ahmadwibowo62@guru.sma.belajar.id';
primaryTeacher.uid = 'guru-ahmad-wibowo';
primaryTeacher.password = 'guru123';
primaryTeacher.subjectsTaught = ['Koding dan Kecerdasan Artifisial', 'Informatika'];
primaryTeacher.subject = 'Koding dan Kecerdasan Artifisial, Informatika';
primaryTeacher.major = 'Koding dan Kecerdasan Artifisial & Informatika';

export const adminUser: UserProfile = {
  uid: 'admin-01',
  email: 'admin@smkn1sidayu.sch.id',
  displayName: 'Bambang Sudarsono, M.Pd.',
  role: 'admin',
  password: 'admin123',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
  nip: '197508122002121003',
  phone: '081234567890'
};

export const OFFICIAL_PRINCIPAL: UserProfile = {
  uid: 'kepsek-01',
  email: 'kepsek@smkn1sidayu.sch.id',
  displayName: 'Arni Sulistyowati, S.Pd., M.Pd.',
  role: 'kepsek',
  password: 'kepsek123',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
  nip: '19720831 199702 2 004',
  phone: '081234567890',
  className: 'SMKN 1 Sidayu'
};

export const INITIAL_USERS: UserProfile[] = [
  adminUser,
  primaryTeacher,
  {
    uid: 'murid-01',
    email: 'dimas.siswa@smkn1sidayu.sch.id',
    displayName: 'Dimas Aditya Pratama',
    role: 'murid',
    password: 'siswa123',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250',
    nisn: '0075648921',
    classId: 'class-tkj-1',
    className: 'X TKJ 1',
    major: 'Teknik Komputer dan Jaringan (TKJ)',
    phone: '085711223344'
  },
  {
    uid: 'murid-02',
    email: 'nadia.siswa@smkn1sidayu.sch.id',
    displayName: 'Nadia Putri Salma',
    role: 'murid',
    password: 'siswa123',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
    nisn: '0075648922',
    classId: 'class-tkj-1',
    className: 'X TKJ 1',
    major: 'Teknik Komputer dan Jaringan (TKJ)'
  },
  {
    uid: 'murid-03',
    email: 'rizky.siswa@smkn1sidayu.sch.id',
    displayName: 'Rizky Ramadhani',
    role: 'murid',
    password: 'siswa123',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    nisn: '0075648923',
    classId: 'class-tkr-1',
    className: 'X TKR 1',
    major: 'Teknik Kendaraan Ringan (TKR)'
  },
  OFFICIAL_PRINCIPAL,
  ...INITIAL_TEACHERS.filter(t => t.uid !== primaryTeacher.uid)
];


// ==========================================
// DAFTAR 32 KELAS RESMI SMKN 1 SIDAYU
// (Sesuai Struktur Rombel Lampiran Gambar 3)
// ==========================================
const RAW_CLASS_NAMES = [
  'X APHPi 1', 'X APHPi 2',
  'XI APHPi 1', 'XI APHPi 2',
  'XII APHPi 1', 'XII APHPi 2',
  'X TKR 1', 'X TKR 2', 'X TKR 3', 'X TKR 4',
  'XI TKR 1', 'XI TKR 2', 'XI TKR 3', 'XI TKR 4',
  'XII TKR 1', 'XII TKR 2', 'XII TKR 3', 'XII TKR 4',
  'X TKJ 1', 'X TKJ 2', 'X TKJ 3',
  'XI TKJ 1', 'XI TKJ 2', 'XI TKJ 3',
  'XII TKJ 1', 'XII TKJ 2', 'XII TKJ 3',
  'X TITL 1', 'X TITL 2',
  'XI TITL 1', 'XI TITL 2',
  'XII TITL 1', 'XII TITL 2'
];

export const INITIAL_CLASSES: ClassGroup[] = RAW_CLASS_NAMES.map((name, index) => {
  const parts = name.split(' ');
  const grade = parts[0] as 'X' | 'XI' | 'XII';
  const code = parts[1]; // APHPi, TKR, TKJ, TITL
  
  let majorName = '';
  if (code === 'APHPi') majorName = 'Agribisnis Pengolahan Hasil Perikanan (APHPi)';
  else if (code === 'TKR') majorName = 'Teknik Kendaraan Ringan (TKR)';
  else if (code === 'TKJ') majorName = 'Teknik Komputer dan Jaringan (TKJ)';
  else if (code === 'TITL') majorName = 'Teknik Instalasi Tenaga Listrik (TITL)';

  const assignedTeacher = OFFICIAL_TEACHERS[index % OFFICIAL_TEACHERS.length];

  return {
    id: `class-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name: name,
    major: majorName,
    grade: grade,
    academicYear: '2026/2027',
    teacherId: `guru-${(index % OFFICIAL_TEACHERS.length) + 1}`,
    teacherName: assignedTeacher.name,
    studentCount: 36
  };
});

// ==========================================
// CAPAIAN PEMBELAJARAN (CP) RESMI SESUAI MAPEL
// ==========================================
export const INITIAL_CP: CapaianPembelajaran[] = [
  {
    id: 'cp-01',
    code: 'CP-E-AI-01',
    phase: 'E',
    subject: 'Koding dan Kecerdasan Artifisial',
    element: 'Prompt Engineering & Pemanfaatan AI Generatif',
    description: 'Pada akhir Fase E murid mampu menerapkan prompt engineering pada kecerdasan artifisial generatif sebagai evaluasi pemahaman terhadap proses perencanaan proyek, desain dan pengembangan produk.',
    targetSemester: 2,
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    tpCount: 3
  },
  {
    id: 'cp-02',
    code: 'CP-E-INF-01',
    phase: 'E',
    subject: 'Informatika',
    element: 'Berpikir Komputasional & Algoritma Pemrograman',
    description: 'Pada akhir Fase E murid mampu menerapkan strategi algoritmik standar untuk menghasilkan beberapa solusi persoalan dengan data diskrit bervolume tidak kecil.',
    targetSemester: 2,
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    tpCount: 2
  },
  {
    id: 'cp-03',
    code: 'CP-E-DPK-01',
    phase: 'E',
    subject: 'Dasar-dasar Program Keahlian',
    element: 'Keselamatan, Kesehatan Kerja dan Lingkungan Hidup (K3LH)',
    description: 'Pada akhir Fase E murid mampu menerapkan K3LH dan budaya kerja industri pada pelaksanaan praktikum kejuruan secara konsisten.',
    targetSemester: 1,
    teacherId: 'guru-16',
    teacherName: 'Budi Subiyanto, S.Kom.',
    tpCount: 2
  }
];

export const INITIAL_TP: TujuanPembelajaran[] = [
  {
    id: 'tp-01',
    cpId: 'cp-01',
    cpCode: 'CP-E-AI-01',
    code: 'TP-01.1',
    description: 'Menganalisis struktur prompt (instruksi, konteks, parameter masukan, dan format luaran) pada model AI generatif.',
    order: 1,
    indicators: [
      'Murid mampu mengidentifikasi komponen prompt',
      'Murid mampu membedakan instruksi umum dan prompt spesifik',
      'Murid mampu menguraikan tujuan prompt'
    ],
    minimumMasteryScore: 75
  },
  {
    id: 'tp-02',
    cpId: 'cp-01',
    cpCode: 'CP-E-AI-01',
    code: 'TP-01.2',
    description: 'Menyusun prompt sesuai tujuan pembelajaran dan spesifikasi rancangan produk.',
    order: 2,
    indicators: [
      'Murid mampu merancang prompt system role',
      'Murid mampu menerapkan teknik few-shot prompting',
      'Murid mampu memandu AI menghasilkan kode dan dokumentasi berkualitas'
    ],
    minimumMasteryScore: 75
  },
  {
    id: 'tp-03',
    cpId: 'cp-01',
    cpCode: 'CP-E-AI-01',
    code: 'TP-01.3',
    description: 'Mengevaluasi hasil keluaran AI generatif serta memverifikasi akurasi dan kesesuaian solusi terhadap problem nyata.',
    order: 3,
    indicators: [
      'Murid mampu menguji kode keluaran AI',
      'Murid mampu mendeteksi halusinasi data',
      'Murid mampu melakukan perbaikan prompt secara berulang (iterasi)'
    ],
    minimumMasteryScore: 75
  },
  {
    id: 'tp-04',
    cpId: 'cp-02',
    cpCode: 'CP-E-INF-01',
    code: 'TP-02.1',
    description: 'Merancang algoritma pemrograman terstruktur dan struktur data terorganisir.',
    order: 1,
    indicators: [
      'Murid mampu membuat flowchart algoritma',
      'Murid mampu mengimplementasikan struktur kondisi dan perulangan'
    ],
    minimumMasteryScore: 75
  }
];

export const INITIAL_RUBRICS: Rubric[] = [
  {
    id: 'rubric-01',
    title: 'Rubrik Standar Evaluasi LKPD Kurikulum Merdeka SMKN 1 Sidayu',
    description: 'Format baku penilaian 4 kriteria dengan bobot 30-30-20-20 dan skala 1-4',
    isDefault: true,
    teacherId: primaryTeacher.uid,
    criteria: [
      {
        id: 'crit-01',
        name: 'Pemahaman Konsep',
        weight: 30,
        descriptors: {
          1: 'Sangat Kurang: Tidak memahami konsep dasar prompt engineering dan peran AI.',
          2: 'Kurang: Memahami definisi dasar tetapi belum mampu menghubungkan konsep komponen prompt.',
          3: 'Baik: Memahami struktur prompt, role-playing, dan batasan instruksi secara tepat.',
          4: 'Sangat Baik: Menguasai secara mendalam konsep few-shot, context-window, dan parameter AI.'
        }
      },
      {
        id: 'crit-02',
        name: 'Ketepatan Jawaban',
        weight: 30,
        descriptors: {
          1: 'Sangat Kurang: Jawaban tidak relevan dengan stimulus soal dan orientasi.',
          2: 'Kurang: Jawaban memiliki banyak kekeliruan analisis instruksi.',
          3: 'Baik: Sebagian besar jawaban tepat dan relevan dengan tugas yang diberikan.',
          4: 'Sangat Baik: Semua jawaban terverifikasi tepat, runtut, logis, dan analitis.'
        }
      },
      {
        id: 'crit-03',
        name: 'Kreativitas',
        weight: 20,
        descriptors: {
          1: 'Sangat Kurang: Jawaban sangat monoton hanya mengulang contoh modul.',
          2: 'Kurang: Menunjukkan sedikit variasi ide namun belum orisinal.',
          3: 'Baik: Menyajikan variasi skenario prompt yang inovatif dan terarah.',
          4: 'Sangat Baik: Memberikan solusi kreatif dan terobosan ide di luar dugaan standar.'
        }
      },
      {
        id: 'crit-04',
        name: 'Kelengkapan',
        weight: 20,
        descriptors: {
          1: 'Sangat Kurang: Hanya mengerjakan sebagian kecil komponen LKPD.',
          2: 'Kurang: Komponen LKPD belum lengkap, refleksi atau praktik terlewat.',
          3: 'Baik: Seluruh bagian A, B, C, D, dan E terisi dengan baik.',
          4: 'Sangat Baik: Lengkap sempurna dengan dokumentasi rapi dan refleksi mendalam.'
        }
      }
    ]
  }
];

export const INITIAL_LKPD: InteractiveLKPD[] = [
  {
    id: 'lkpd-01',
    title: 'LKPD Interaktif 01: Penerapan Prompt Engineering Pada AI Generatif',
    subject: 'Koding dan Kecerdasan Artifisial',
    classIds: ['class-x-tkj-1', 'class-x-tkj-2', 'class-x-tkr-1'],
    tpId: 'tp-01',
    tpCode: 'TP-01.1 & TP-01.2',
    cpId: 'cp-01',
    rubricId: 'rubric-01',
    durationMinutes: 90,
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    createdAt: '2026-11-01T08:00:00Z',
    orientasi: {
      type: 'video',
      contentUrl: 'https://www.youtube.com/embed/jC4v5AS4RIM',
      promptText: 'Perhatikan video pemantik di atas mengenai bagaimana pengembang perangkat lunak profesional memanfaatkan Prompt Engineering untuk mempercepat pembuatan arsitektur sistem dan debugging kode. Amati bagaimana instruksi yang ambigu dapat menyebabkan halusinasi model.'
    },
    eksplorasi: {
      content: `### Pedoman Anatomi Prompt yang Efektif
Dalam pengembangan perangkat lunak modern, prompt yang presisi memiliki anatomi:
1. **Persona / Role**: Memberikan identitas keahlian pada model (cth: "Bertindak sebagai Senior Cloud Architect").
2. **Context & Constraints**: Menjelaskan batasan teknologi, versi framework (cth: "React 18, Vite, TypeScript tanpa external CSS library").
3. **Task Instruction**: Aksi konkrit yang harus dieksekusi secara langkah demi langkah.
4. **Input Data / Reference**: Kode sumber, skema database, atau kasus pengujian.
5. **Output Format**: Format luaran yang diinginkan (JSON terstruktur, snippet kode clean, tabel perbandingan).`,
      referenceLinks: [
        'https://platform.openai.com/docs/guides/prompt-engineering',
        'https://developers.googleblog.com/prompt-techniques'
      ]
    },
    diskusi: {
      questions: [
        {
          id: 'q1',
          question: '1. Mengapa teknik pemberian "Role" (Peran) di awal prompt dapat meningkatkan akurasi jawaban model AI generatif dibandingkan instruksi polos?',
          placeholder: 'Jelaskan berdasarkan konsep penyesuaian bobot token dan domain knowledge...'
        },
        {
          id: 'q2',
          question: '2. Analisislah sebuah contoh prompt yang buruk ("Buatkan aplikasi toko online") dan ubahlah menjadi prompt berkualitas tinggi menggunakan kaidah 5 anatomi prompt!',
          placeholder: 'Tuliskan hasil revisi prompt Anda beserta alasannya...'
        },
        {
          id: 'q3',
          question: '3. Bagaimana langkah mitigasi jika AI memberikan potongan kode yang usang (deprecated) atau mengandung kerentanan keamanan (vulnerability)?',
          placeholder: 'Uraikan proses evaluasi dan verifikasi yang dilakukan programmer...'
        }
      ]
    },
    praktik: {
      instructions: 'Rancanglah sebuah dokumen uji prompt (bisa berupa file PDF laporan atau link repository/tangkapan layar percobaan) saat Anda meminta AI membuat algoritma validasi formulir pendaftaran siswa baru SMKN 1 Sidayu dengan format JSON.',
      allowedFormats: ['pdf', 'docx', 'png', 'jpg', 'zip', 'link']
    },
    refleksi: {
      questions: [
        'Apa wawasan baru paling berharga yang Anda peroleh setelah menyelesaikan lembar kerja ini?',
        'Kendala apa yang paling menantang saat merumuskan prompt agar AI tidak menghasilkan output yang bias?',
        'Bagaimana Anda akan menerapkan kemampuan prompt engineering ini dalam pembelajaran ke depan?'
      ]
    }
  }
];

export const INITIAL_MATERIALS: LearningMaterial[] = [
  {
    id: 'mat-01',
    title: 'Modul Ajar: Fondasi Koding & Prompt Engineering AI SMK',
    description: 'Panduan lengkap struktur prompt instruksional Fase E SMKN 1 Sidayu.',
    subject: 'Koding dan Kecerdasan Artifisial',
    classIds: ['class-x-tkj-1', 'class-x-tkj-2'],
    type: 'pdf',
    fileName: 'Modul_Prompt_Engineering_SMKN1Sidayu.pdf',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    tpId: 'tp-01',
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    createdAt: '2026-10-28T09:00:00Z',
    views: 184
  },
  {
    id: 'mat-02',
    title: 'Slide PPT: Konsep Rekayasa Komputasi Berbasis AI',
    description: 'Materi presentasi kelas tatap muka dan daring mengenai siklus SDLC berbantuan AI.',
    subject: 'Koding dan Kecerdasan Artifisial',
    classIds: ['class-x-tkj-1'],
    type: 'ppt',
    fileName: 'Materi_Presentasi_SDLC_AI.pptx',
    fileUrl: '#',
    tpId: 'tp-02',
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    createdAt: '2026-10-30T10:30:00Z',
    views: 96
  },
  {
    id: 'mat-03',
    title: 'Video Pembelajaran: Praktik Live Debugging Kode dengan AI Generatif',
    description: 'Simulasi penggunaan terminal dan web IDE untuk memecahkan bug logika algoritma.',
    subject: 'Informatika',
    classIds: ['class-x-tkj-1', 'class-x-tkr-1'],
    type: 'youtube',
    youtubeId: 'jC4v5AS4RIM',
    tpId: 'tp-03',
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    createdAt: '2026-11-01T14:00:00Z',
    views: 240
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'assign-01',
    title: 'Penugasan Mandiri: LKPD Interaktif Prompt Engineering Fase E',
    description: 'Kerjakan seluruh komponen LKPD Interaktif 01 mulai dari Orientasi, Eksplorasi materi, Diskusi tertulis, Praktik prompt, hingga Refleksi diri.',
    subject: 'Koding dan Kecerdasan Artifisial',
    classIds: ['class-x-tkj-1', 'class-x-tkj-2'],
    cpId: 'cp-01',
    tpId: 'tp-01',
    rubricId: 'rubric-01',
    lkpdId: 'lkpd-01',
    deadline: '2026-11-20T23:59:00Z',
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    createdAt: '2026-11-01T08:30:00Z'
  },
  {
    id: 'assign-02',
    title: 'Tugas Portofolio: Algoritma Pencarian & Pengurutan Data',
    description: 'Buatlah rancangan algoritma dan diagram alir (flowchart) untuk sistem inventaris bengkel.',
    subject: 'Informatika',
    classIds: ['class-x-tkj-1'],
    cpId: 'cp-02',
    tpId: 'tp-04',
    rubricId: 'rubric-01',
    deadline: '2026-11-25T23:59:00Z',
    teacherId: primaryTeacher.uid,
    teacherName: primaryTeacher.displayName,
    createdAt: '2026-11-02T10:00:00Z'
  }
];

export const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: 'sub-01',
    assignmentId: 'assign-01',
    assignmentTitle: 'Penugasan Mandiri: LKPD Interaktif Prompt Engineering Fase E',
    studentId: 'murid-01',
    studentName: 'M. Hafiz Al-Fathir',
    studentNisn: '0075648921',
    classId: 'class-x-tkj-1',
    className: 'X TKJ 1',
    submittedAt: '2026-11-02T14:20:00Z',
    status: 'submitted',
    note: 'Tugas LKPD sudah selesai dikerjakan lengkap dari bagian A sampai E, Pak. Terima kasih.',
    fileName: 'Laporan_Praktik_Prompt_Hafiz.pdf',
    lkpdAnswers: {
      diskusiAnswers: {
        q1: 'Pemberian Role membatasi ruang probabilistik model bahasa besar (LLM) sehingga model mengaktifkan cluster kosakata dan pola respons spesifik pakar perangkat lunak.',
        q2: 'Prompt revisi: "Bertindak sebagai Tech Lead web e-commerce. Buatkan arsitektur database PostgreSQL untuk fitur keranjang belanja dan checkout dengan mempertimbangkan atomic transaction."',
        q3: 'Langkah mitigasi adalah menguji kode pada unit testing environment, memeriksa CVE database, dan memvalidasi sintaks dengan dokumentasi resmi library terbaru.'
      },
      praktikUrl: 'https://github.com/hafiz-smkn1/prompt-test-case',
      praktikNote: 'Tangkapan layar dan log perbandingan prompt disertakan dalam tautan repo.',
      refleksiAnswers: {
        '0': 'Mengetahui bahwa kualitas prompt menentukan 90% keakuratan kode yang dihasilkan.',
        '1': 'Menentukan batasan kata kunci dan format keluaran tanpa memotong jawaban AI.',
        '2': 'Saya akan menggunakannya untuk code reviewing mandiri sebelum dikumpulkan ke guru.'
      }
    },
    scoreId: 'score-01'
  },
  {
    id: 'sub-02',
    assignmentId: 'assign-01',
    assignmentTitle: 'Penugasan Mandiri: LKPD Interaktif Prompt Engineering Fase E',
    studentId: 'murid-02',
    studentName: 'Nadia Putri Salma',
    studentNisn: '0075648922',
    classId: 'class-x-tkj-1',
    className: 'X TKJ 1',
    submittedAt: '2026-11-02T16:45:00Z',
    status: 'submitted',
    note: 'Mohon koreksi dan masukan untuk praktik prompt few-shot saya.',
    fileName: 'Tugas_LKPD_Nadia_Salma.pdf',
    lkpdAnswers: {
      diskusiAnswers: {
        q1: 'Role memberikan konteks profesional dan gaya bahasa teknis yang sesuai.',
        q2: 'Prompt diperbaiki dengan rincian kebutuhan spesifik dan contoh input-output.',
        q3: 'Melakukan testing manual dan meminta AI mengevaluasi kode dengan prompt reviewer.'
      },
      praktikUrl: 'https://gist.github.com/nadiasalma/ai-prompt-demo',
      refleksiAnswers: {
        '0': 'Memahami pentingnya instruksi terstruktur.',
        '1': 'Menemukan parameter output yang pas.',
        '2': 'Mengoptimalkan waktu pengerjaan tugas proyek coding.'
      }
    }
  }
];

export const INITIAL_SCORES: Score[] = [
  {
    id: 'score-01',
    submissionId: 'sub-01',
    assignmentId: 'assign-01',
    studentId: 'murid-01',
    studentName: 'M. Hafiz Al-Fathir',
    studentNisn: '0075648921',
    classId: 'class-x-tkj-1',
    tpId: 'tp-01',
    cpId: 'cp-01',
    breakdown: [
      { criterionId: 'crit-01', criterionName: 'Pemahaman Konsep', weight: 30, score: 4 },
      { criterionId: 'crit-02', criterionName: 'Ketepatan Jawaban', weight: 30, score: 4 },
      { criterionId: 'crit-03', criterionName: 'Kreativitas', weight: 20, score: 3 },
      { criterionId: 'crit-04', criterionName: 'Kelengkapan', weight: 20, score: 4 }
    ],
    finalScore: 95,
    category: 'Sangat Baik',
    feedback: 'M. Hafiz Al-Fathir, Sangat baik, pertahankan hasil belajar dan tingkatkan eksplorasi mandiri. Analisis anatomi prompt sangat komprehensif.',
    gradedBy: primaryTeacher.displayName,
    gradedAt: '2026-11-02T17:00:00Z'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-01',
    userId: 'murid-01',
    title: 'Tugas Baru Diterbitkan',
    message: `${primaryTeacher.displayName} menerbitkan "Penugasan Mandiri: LKPD Interaktif Prompt Engineering Fase E".`,
    type: 'assignment',
    link: '/tugas',
    createdAt: '2026-11-01T08:30:00Z',
    read: true
  },
  {
    id: 'notif-02',
    userId: 'murid-01',
    title: 'Nilai LKPD Telah Masuk',
    message: 'Tugas LKPD Anda telah dinilai. Skor Akhir: 95 (Sangat Baik). Klik untuk melihat detail rubrik.',
    type: 'grade',
    link: '/nilai-saya',
    createdAt: '2026-11-02T17:05:00Z',
    read: false
  },
  {
    id: 'notif-03',
    userId: primaryTeacher.uid,
    title: 'Pengumpulan Tugas Baru',
    message: 'Nadia Putri Salma baru saja mengumpulkan LKPD Interaktif Prompt Engineering.',
    type: 'assignment',
    link: '/penilaian',
    createdAt: '2026-11-02T16:45:00Z',
    read: false
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-01',
    title: 'Pelaksanaan Asesmen Sumatif Tengah Semester Genap 2026/2027',
    content: 'Diberitahukan kepada seluruh peserta didik SMKN 1 Sidayu bahwa Asesmen Sumatif Tengah Semester akan diselenggarakan berbasis digital menggunakan SI-LKPD. Pastikan seluruh LKPD dan tugas telah terselesaikan tepat waktu.',
    targetRole: 'all',
    authorName: 'Wakasek Bidang Kurikulum',
    createdAt: '2026-11-01T07:00:00Z',
    isImportant: true
  },
  {
    id: 'ann-02',
    title: 'Workshop Guru SMKN 1 Sidayu: Optimalisasi Koding dan Kecerdasan Artifisial',
    content: 'Jadwal bimbingan teknis perancangan rubrik penilaian berbasis TP dan implementasi prompt engineering bagi seluruh 65 guru di SMKN 1 Sidayu.',
    targetRole: 'guru',
    authorName: 'Kepala SMKN 1 Sidayu',
    createdAt: '2026-10-31T11:00:00Z'
  }
];

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-01',
    channelId: 'class-x-tkj-1',
    senderId: primaryTeacher.uid,
    senderName: primaryTeacher.displayName,
    senderRole: 'guru',
    senderAvatar: primaryTeacher.avatarUrl,
    text: 'Selamat pagi siswa-siswi kelas X TKJ 1. Jangan lupa untuk menyimak video pemantik pada bagian A LKPD Interaktif sebelum menjawab bagian eksplorasi ya.',
    timestamp: '2026-11-02T08:00:00Z'
  },
  {
    id: 'msg-02',
    channelId: 'class-x-tkj-1',
    senderId: 'murid-01',
    senderName: 'M. Hafiz Al-Fathir',
    senderRole: 'murid',
    senderAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250',
    text: 'Baik Pak Ahmad! Apakah file praktiknya boleh berupa tautan repositori GitHub publik?',
    timestamp: '2026-11-02T08:15:00Z'
  },
  {
    id: 'msg-03',
    channelId: 'class-x-tkj-1',
    senderId: primaryTeacher.uid,
    senderName: primaryTeacher.displayName,
    senderRole: 'guru',
    senderAvatar: primaryTeacher.avatarUrl,
    text: 'Sangat boleh Hafiz. Pastikan README repo memuat penjelasan ringkas tentang prompt yang diuji.',
    timestamp: '2026-11-02T08:18:00Z'
  }
];
