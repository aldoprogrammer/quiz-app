const quizData = [
    {
        question: 'Chat tiap hari?',
        a: 'No',
        b: 'Engga',
        c: 'Aku banget',
        d: 'Ga juga sih',
        correct: 'c'
    }, {
        question: "Pernah ciuman?",
        a: 'Baru kemaren',
        b: 'Sering',
        c: 'Stay halal brother',
        d: 'Mau, tapi gamo dosa',
        correct: 'a'
    }, {
        question: "Pernah kirimin grab-food?",
        a: 'Sesekali',
        b: 'Mending nabung',
        c: 'Mo beli kuota aja',
        d: 'Aku sendiri aja laper',
        correct: 'a'
    }, {
        question: "Berapa lama kamu nunggu pacar pulang sekolah/kerja/kuliah?",
        a: "2 jam",
        b: "30 menit",
        c: "15 aja udah ga tahan",
        d: "Cus aja lah ya",
        correct: "a"
    }, {
        question: "Berapa uang yang kamu habiskan saat sekali jalan sama pacar / crush mu?",
        a: "100 Ribu",
        b: "50 Ribu",
        c: "Lebih dari 300 Ribu",
        d: "Bayar setengah-setengah",
        correct: "c"
    },{
        question: "Pernah beliin pulsa / kuota buat pacar?",
        a: "Sekali doang sih",
        b: "Ga deh mending beli boba",
        c: "Iyaa biar bisa chat ama ayang",
        d: "Ga ada duit",
        correct: "c"
    }, {
        question: "Kamu ke bioskop sama pacar berapa kali seminggu?",
        a: "1 Kali",
        b: "Tiap ada film bagus / trend aja",
        c: "Tiap hari Sabtu dan Minggu",
        d: "Mending nonton youtube",
        correct: "c"
    }, {
        question:"Sebarapa sering mabar game/bikin konten tiktok ama ayang?",
        a: "Tiap malam/hari",
        b: "Dulu pernah sekali",
        c: "Sewajar nya doang",
        d: "Buat gabut doang sih",
        correct: "a"
    }, {
        question: "Pernah ngasih kado seharga 500 ribu ke pacar?",
        a: "Pernah pas ultah nya",
        b: "Diawal pacaran iya",
        c: "Tiap bulan selalu ada hadiah buat ayang",
        d: "Cuma barang dibawah 100 Ribu",
        correct: "c"
    }, {
        question: "Pernah tukeran akun WhatsApp/Instagram?",
        a: "Iya biar bisa cek sapa yang chat dia",
        b: "Privasi dong",
        c: "Bego lu",
        d: "Dia ngajak, tapi gua gamau",
        correct: "a"
    }, {
        question: "Pernah nganter makan ke ayang buat makan siang?",
        a: "Tiap hari sih",
        b: "Sekali seminggu",
        c: "Aku gabisa masak",
        d: "Mending masak mi buat gua sendiri",
        correct: "a"
    }, {
        question: "Nabung dari uang jajan, buat jalan sama ayang?",
        a: "Ya, biar bisa makan bareng",
        b: "Paket internet gua abis",
        c: "Sekali",
        d: "Aku lebih mo buat beli hape baru sih",
        correct: "a"
    }, {
        question: "Pernah makan nasgor satu piring berdua?",
        a: "Ga modal!",
        b: "Intimasi nya berasa, pengen lagi deh",
        c: "Malu diliatin orang",
        d: "Kalo didalem kos sih oke aja",
        correct: "b"
    }, {
        question: "Pernah tidur berdua dalam kamar/rumah, tapi isi nya cuma kalian berdua?",
        a: "Pernah pas dia main ke rumah",
        b: "Ga berani khilaf!",
        c: "Duduk berdua doang, ga tidur",
        d: "Engga mau",
        correct: "a"
    }, {
        question: "Suka musik/film/game/aplikasi karena ayang yang ngajarin?",
        a: "Mau mau aja biar bisa match ama dia",
        b: "Gaa",
        c: "Aku gabisa dipaksa",
        d: "Gua punya selera sendiri",
        correct: "a"
    }, {
        question: "Menurut lu berapa kali seminggu buat jalan ama doi?",
        a: "Seminggu sekali",
        b: "Dua minggu aja cukup",
        c: "Kalo sama-sama punya waktu",
        d: "Pengen ketemu, tapi gamo terus-terusan",
        correct: "a"
    }, {
        question: "Sering antar jemput ama ayang?",
        a: "Tiap pulang sekolah/kampus/kerja",
        b: "Ga pernah",
        c: "Sekali doang",
        d: "Naik grab aja",
        correct: "a"
    }, {
        question: "Pas ketemu minimal cium/pegang tangan/peluk?",
        a: "Iya",
        b: "Ga pernah",
        c: "Emph",
        d: "Belum sah",
        correct: "a"
    }
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const judul = document.getElementById('judul');
const judul2 = document.getElementById('judul2');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    

    const answer = getSelected();
    const scorePerCent = Math.round(100 * score/quizData.length);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        function sembunyi(){
            judul.style.display = "none";
          }  
          function muncul(){
            judul2.style.display = "flex";
          }
        

        currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
            //    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Give a Try Again!</button>`;
            //    quiz.innerHTML = `<h2>Kamu itu ${scorePerCent}% bucin</h2><button onclick="location.reload()">Give a Try Again!</button>`;
            // quiz.innerHTML += "<p>Kamu "+ scorePerCent +"% Bucin</p>";
            sembunyi();
            muncul();
            quiz.innerHTML = `<h2>Kamu itu ${Math.round(100 * score/quizData.length)}% bucin &#128517&#128541.</h2><button onclick="location.reload()">Give a Try Again!</button>`;
        }
}
    
});
