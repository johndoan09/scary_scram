let mypick = 0;
let myanswer = 0;
let yourpick = 0;
let youranswer = 0;
let stage = 3;
let soundOn = false;


document.addEventListener('DOMContentLoaded', () => {
    
    const doorone = document.getElementById('doorone');
    const doortwo = document.getElementById('doortwo');
    const doorthree = document.getElementById('doorthree');
    const startBtn = document.getElementById('startbtn');
    const rulesBtn = document.getElementById('rulesbtn');
    const rulesceneBtn = document.getElementById('rulescenebtn');
    const scene1 = document.getElementById('scene1');
    const darkness = document.getElementById('darkscene');
    const safescene = document.getElementById('safescene');
    const scaryscene = document.getElementById('scaryscene');
    const topone = document.getElementById('topone');
    const toptwo = document.getElementById('toptwo');
    const topthree = document.getElementById('topthree');
    const brownone = document.getElementById('brownone');
    const browntwo = document.getElementById('browntwo');
    const brownthree = document.getElementById('brownthree');
    const losebtn = document.getElementById('losebtn');
    const winbtn = document.getElementById('winbtn');
    const rightscene = document.getElementById('rightscene');
    const wrongscene = document.getElementById('wrongscene');
    const selectbtn = document.getElementById('selectbtn');
    const tomselectbtn = document.getElementById('tomselectbtn');
    const scarySound = document.getElementById('scarySound');
    const heartSound = document.getElementById('heartbeat');
    const jumpScare = document.getElementById('jumpscare');
    const soundbtn = document.getElementById('soundbtn');
    const wrongbtn = document.getElementById('wrongbtn');
    const rightbtn = document.getElementById('rightbtn');
    const scarybtn = document.getElementById('scarybtn');
    const safebtn = document.getElementById('safebtn');

    scene1.style.display ='flex';
    scene2.style.display = 'none';

    soundbtn.addEventListener('click', () => {
        if (soundOn) {
            soundbtn.innerHTML = `Sound: Off`;
            scarySound.pause();
            soundOn = false;
        } else {
            soundbtn.innerHTML = `Sound: On`;
            scarySound.load();
            scarySound.play();
            soundOn = true;
        }
    });

    startBtn.addEventListener('click', () => {
        document.getElementById('scene2').style.display = 'flex';
        document.getElementById('scene1').style.display = 'none';
        updateStage();
        clearDoor();
        if (soundOn) {
            scarySound.play();
        }
    });

    rulesBtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.play();
        }
        document.getElementById('scene1').style.display = 'none';
        document.getElementById('rulescene').style.display = 'flex';
    });

    rulesceneBtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.play();
        }
        document.getElementById('rulescene').style.display = 'none';
        document.getElementById('scene1').style.display = 'flex';
    });

    doorone.addEventListener('click', () => openDoor(1, doorone));
    doortwo.addEventListener('click', () => openDoor(2, doortwo));
    doorthree.addEventListener('click', () => openDoor(3, doorthree));

    const openDoor = (doorNumber, doorElement) => {
        clearDoor();
        updateStage();
        document.getElementById('selectbtn').style.display = 'flex';
        doorElement.classList.add('selected');
        mypick = doorNumber;
        myanswer = Math.floor(Math.random() * 3) + 1;
    };

    const clearDoor = () => {
        doorone.classList.remove('selected');
        doortwo.classList.remove('selected');
        doorthree.classList.remove('selected');
        topone.classList.remove('selected2');
        toptwo.classList.remove('selected2');
        topthree.classList.remove('selected2');
    }

    selectbtn.addEventListener('click', () => {
        document.getElementById('scene2').style.display = 'none';
        document.getElementById('darkscene').style.display = 'flex';
        document.getElementById('soundbtn').style.display = 'none';
        clearDoor();
        const randomDelay = Math.floor(Math.random() * 3000) + 3000;
        scarySound.pause();
        if (soundOn) {
            heartSound.play();
        }
        setTimeout(() => {
            document.getElementById('darkscene').style.display = 'none';
            heartSound.pause();
            if (true) {
                document.getElementById('scaryscene').style.display = 'flex';
                updateStage();
                if (soundOn) {
                    jumpScare.load();
                    jumpScare.play();
                }
            } else {
                document.getElementById('soundbtn').style.display = 'flex';
                stage++;
                updateStage();
                if (soundOn) {
                    scarySound.load();
                    scarySound.play();
                }
                if (stage == 6) {
                    document.getElementById('winscene').style.display = 'flex';
                } else {
                    document.getElementById('safescene').style.display = 'flex';
                }
            }
        }, randomDelay);
        document.getElementById('selectbtn').style.display = 'none';
    });

    const updateStage = () => {
        document.getElementById('stageTracker').innerHTML = `Stage: ${stage}/5`; 
        document.getElementById('stageTracker2').innerHTML = `Stage: ${stage}/5`;
    }

    scarybtn.addEventListener('click', () => {
        if (soundOn) {
            jumpScare.pause();
            scarySound.load();
            scarySound.play();
        }
        document.getElementById('soundbtn').style.display = 'flex';
        document.getElementById('scaryscene').style.display = 'none';
        document.getElementById('tomscene').style.display = 'flex';
        if (stage == 1) {
            document.getElementById('final2').style.display = 'flex';
        } else {
            document.getElementById('final2').style.display = 'none';
        }
    });

    topone.addEventListener('click', () => hideDoor(1, topone, brownone));
    toptwo.addEventListener('click', () => hideDoor(2, toptwo, browntwo));
    topthree.addEventListener('click', () => hideDoor(3, topthree, brownthree));

    const hideDoor = (doorNum, doorElement, brownElement) => {
        clearDoor();
        updateStage();
        doorElement.classList.add('selected2');
        document.getElementById('tomselectbtn').style.display = 'flex';
        brownone.classList.add('hidden');
        browntwo.classList.add('hidden');
        brownthree.classList.add('hidden');
        brownElement.classList.remove('hidden');
        yourpick = doorNum;
        youranswer = Math.floor(Math.random() * 3) + 1;
    }

    tomselectbtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.play();
        }
        clearDoor();
        document.getElementById('tomscene').style.display = 'none';
        if (yourpick == youranswer) {
            document.getElementById('rightscene').style.display = 'flex';
            updateStage();
        } else {
            stage--;
            updateStage();
            if (stage == 0) {
                document.getElementById('losescene').style.display = 'flex';
            } else {
                document.getElementById('wrongscene').style.display = 'flex';
            }
        }
        tomselectbtn.style.display = 'none';
        brownone.classList.add('hidden');
        browntwo.classList.add('hidden');
        brownthree.classList.add('hidden');
    });

    rightbtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.play();
        }
        clearDoor();
        document.getElementById('rightscene').style.display = 'none';
        document.getElementById('scene2').style.display = 'flex';
        if (stage == 5) {
            document.getElementById('final').style.display = 'flex';
        }   else {
            document.getElementById('final').style.display = 'none';
        }
    });

    wrongbtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.play();
        }
        clearDoor();
        document.getElementById('wrongscene').style.display = 'none';
        document.getElementById('tomscene').style.display = 'flex';
        if (stage == 1) {
            document.getElementById('final2').style.display = 'flex';
        } else {
            document.getElementById('final2').style.display = 'none';
        }
    });

    safebtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.play();
        }
        document.getElementById('safescene').style.display = 'none';
        document.getElementById('scene2').style.display = 'flex';
        if (stage == 5) {
            document.getElementById('final').style.display = 'flex';
        } else {
            document.getElementById('final').style.display = 'none';
        }
    });

    losebtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.load();
            scarySound.play();
        }
        document.getElementById('losescene').style.display = 'none';
        document.getElementById('scene1').style.display = 'flex';
        stage = 3;
        updateStage();
        document.getElementById('final').style.display = 'none';
    });

    winbtn.addEventListener('click', () => {
        if (soundOn) {
            scarySound.load();
            scarySound.play();
        }
        document.getElementById('winscene').style.display = 'none';
        document.getElementById('scene1').style.display = 'flex';
        stage = 3;
        updateStage();
        document.getElementById('final').style.display = 'none';
    });
});


