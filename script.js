const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// === Typing Effect ===
const textElement = document.getElementById('typing-text');
const phrases = [
  "I write Code & Compose Music. 🎵",
  "I build Games with Unity & Logic. 🎮",
  "I draw Dreams with Clip Studio Paint. 🎨",
  "I study Information Technology. 📚"
];
let pIndex = 0;
let cIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = phrases[pIndex];
  if (isDeleting) {
    textElement.textContent = current.substring(0, cIndex - 1);
    cIndex--;
  } else {
    textElement.textContent = current.substring(0, cIndex + 1);
    cIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && cIndex === current.length) {
    isDeleting = true;
    speed = 2000;
  } else if (isDeleting && cIndex === 0) {
    isDeleting = false;
    pIndex = (pIndex + 1) % phrases.length;
    speed = 500;
  }
  setTimeout(typeLoop, speed);
}

if (textElement && !prefersReducedMotion) {
  textElement.textContent = '';
  setTimeout(typeLoop, 1000); // Start typing effect after 1 second
}

// === Transcript Data (ใบแจ้งผลการเรียน ณ 24 พ.ย. 2569) ===
// [รหัสวิชา, ชื่อวิชา, หน่วยกิต, เกรด]  (เกรด null = ยังไม่ประกาศผล)
const TERMS = [
  {
    id: '1/2569', label: 'ภาคเรียนที่ 1/2569', courses: [
      ['GE11001', 'ศาสตร์พระราชาเพื่อการพัฒนาท้องถิ่น', 6, 'A'],
      ['IT22308', 'ปัญญาประดิษฐ์เบื้องต้น', 3, 'B'],
      ['IT37204', 'การวิเคราะห์และออกแบบระบบสารสนเทศ', 3, 'A'],
      ['IT25307', 'การพัฒนาระบบอัจฉริยะทางธุรกิจ', 3, null],
      ['IT29401', 'โครงงานทางเทคโนโลยีสารสนเทศ 1', 3, 'A'],
      ['IT25301', 'การพาณิชย์อิเล็กทรอนิกส์', 3, 'A']
    ]
  },
  {
    id: '2/2568', label: 'ภาคเรียนที่ 2/2568', courses: [
      ['IT46101', 'เทคโนโลยีแพลตฟอร์มคอมพิวเตอร์', 3, 'A'],
      ['IT24102', 'การออกแบบและผลิตสื่อดิจิทัล', 3, 'A'],
      ['IT12301', 'กฎหมาย จริยธรรมและวิชาชีพทางเทคโนโลยีสารสนเทศ', 3, 'A'],
      ['GE22001', 'ความดีงามแห่งชีวิต', 6, 'A'],
      ['IT12302', 'ความมั่นคงสารสนเทศและไซเบอร์', 3, 'A'],
      ['IT12303', 'การเป็นผู้ประกอบการทางธุรกิจดิจิทัล', 3, 'A']
    ]
  },
  {
    id: '1/2568', label: 'ภาคเรียนที่ 1/2568', courses: [
      ['GE33001', 'วิทยาศาสตร์และประเด็นร่วมสมัย', 6, 'A'],
      ['IT41101', 'คณิตศาสตร์สำหรับเทคโนโลยีสารสนเทศ', 3, 'A'],
      ['IT12101', 'พื้นฐานระบบสารสนเทศ', 3, 'A'],
      ['EN56202', 'ภาษาอังกฤษเพื่อจุดประสงค์ทางวิชาการ', 3, 'A'],
      ['IT12202', 'การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์', 3, 'A']
    ]
  },
  {
    id: 'transfer', label: 'เทียบโอนจาก ปวส.', transfer: true, courses: [
      ['GE33002', 'รู้ทันโลกดิจิทัล', 3, 'S'],
      ['CS39302', 'การออกแบบและพัฒนาซอฟต์แวร์เชิงวัตถุ', 3, 'S'],
      ['CS34204', 'การเขียนโปรแกรมคอมพิวเตอร์ขั้นสูง', 3, 'S'],
      ['IT43204', 'การเขียนโปรแกรมเชิงวัตถุ', 3, 'S'],
      ['IT43203', 'โครงสร้างข้อมูลและขั้นตอนวิธี', 3, 'S'],
      ['IT43102', 'การเขียนโปรแกรมเบื้องต้น', 3, 'S'],
      ['IT41301', 'สถิติสำหรับเทคโนโลยีสารสนเทศ', 3, 'S'],
      ['IT37201', 'ระบบฐานข้อมูล', 3, 'S'],
      ['IT27308', 'ระบบการจัดการฐานข้อมูลและการประยุกต์', 3, 'S'],
      ['IT27205', 'การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่', 3, 'S'],
      ['IT26308', 'การประมวลผลแบบคลาวด์', 3, 'S'],
      ['IT26201', 'เครือข่ายคอมพิวเตอร์', 3, 'S'],
      ['IT25305', 'การเขียนโปรแกรมบนเว็บ', 3, 'S'],
      ['IT25103', 'เว็บเทคโนโลยีและการออกแบบเว็บ', 3, 'S'],
      ['GE44003', 'ภาษาอังกฤษเพื่อการนำไปใช้', 3, 'S'],
      ['GE44002', 'ภาษาอังกฤษในชีวิตประจำวันและการทำงาน', 3, 'S'],
      ['GE44001', 'ภาษาไทยเพื่อการสื่อสาร', 3, 'S'],
      ['IT29301', 'การสัมมนาทางเทคโนโลยีสารสนเทศ', 1, 'S']
    ]
  }
];

const GRADE_POINTS = { A: 4, B: 3, C: 2, D: 1, F: 0 };

function termGpa(courses) {
  let pts = 0, cr = 0;
  courses.forEach(([, , credit, g]) => {
    if (g in GRADE_POINTS) { pts += GRADE_POINTS[g] * credit; cr += credit; }
  });
  return cr ? pts / cr : null;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderTranscript() {
  const root = document.getElementById('transcript');
  if (!root) return;

  root.innerHTML = TERMS.map((t, i) => {
    const credits = t.courses.reduce((s, c) => s + c[2], 0);
    const gpa = termGpa(t.courses);
    const pending = t.courses.filter(c => c[3] === null).length;

    const chip = t.transfer
      ? `<span class="term-chip neutral">ผล S ทั้งหมด</span>`
      : `<span class="term-chip">GPA ${gpa.toFixed(2)}${pending ? '*' : ''}</span>`;

    const rows = t.courses.map(([code, name, credit, g]) => {
      const gradeHtml = g === null
        ? `<span class="grade grade-wait">รอผล</span>`
        : `<span class="grade grade-${g}">${esc(g)}</span>`;
      return `<div class="course-row">
          <span class="course-code">${esc(code)}</span>
          <span class="course-name">${esc(name)}</span>
          <span class="course-credit">${credit} นก.</span>
          ${gradeHtml}
        </div>`;
    }).join('');

    return `<details class="term"${i === 0 ? ' open' : ''}>
      <summary>
        <span class="term-title">${esc(t.label)}</span>
        <span class="term-meta">${t.courses.length} วิชา · ${credits} หน่วยกิต</span>
        <span class="term-spacer"></span>
        ${chip}
        <i class="fas fa-chevron-down chev" aria-hidden="true"></i>
      </summary>
      <div class="course-list">${rows}</div>
    </details>`;
  }).join('');
}

renderTranscript();

// === Scroll Reveal ===
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        runCountUps(entry.target);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// === Count-up numbers ===
function runCountUps(scope) {
  if (prefersReducedMotion) return;
  scope.querySelectorAll('.count').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + (p < 1 ? '' : suffix);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

// === Active nav link ===
const navLinks = document.querySelectorAll('[data-nav]');
const sections = [...navLinks].map(a => document.getElementById(a.dataset.nav)).filter(Boolean);
if ('IntersectionObserver' in window) {
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.dataset.nav === entry.target.id));
        const active = document.querySelector('.topnav a.active');
        if (active && active.scrollIntoView) {
          active.scrollIntoView({ block: 'nearest', inline: 'center' });
        }
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(s => navObs.observe(s));
}

// === Card spotlight follows the mouse ===
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

// === Contribution Graph Generator (Blue & Pink) ===
// ใช้ seed คงที่ เพื่อให้กราฟหน้าตาเหมือนเดิมทุกครั้งที่โหลด (เป็น Mockup)
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('graph-grid');
  if (grid) {
    const rand = mulberry32(2548);
    for (let i = 0; i < 364; i++) {
      const pixel = document.createElement('div');
      const r = rand();
      let cls = 'pixel';

      // Logic for colors similar to GitHub contribution but with Neon theme
      if (r > 0.90) cls += ' pink-glow';        // Bright Pink
      else if (r > 0.80) cls += ' blue-glow';   // Bright Blue
      else if (r > 0.70) cls += ' med-pink';
      else if (r > 0.55) cls += ' med-blue';

      pixel.className = cls;
      grid.appendChild(pixel);
    }
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
