let mypick = 0;
let myanswer = 0;
let yourpick = 0;
let youranswer = 0;
let stage = 3;

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
    const losebtn = document.getElementById('losebtn');
    const winbtn = document.getElementById('winbtn');
    const rightscene = document.getElementById('rightscene');
    const wrongscene = document.getElementById('wrongscene');

    scene1.style.display ='flex';
    scene2.style.display = 'none';

    startBtn.addEventListener('click', () => {
        document.getElementById('scene2').style.display = 'flex';
        document.getElementById('scene1').style.display = 'none';
        updateStage();
    });

    rulesBtn.addEventListener('click', () => {
        document.getElementById('scene1').style.display = 'none';
        document.getElementById('rulescene').style.display = 'flex';
    });

    rulesceneBtn.addEventListener('click', () => {
        document.getElementById('rulescene').style.display = 'none';
        document.getElementById('scene1').style.display = 'flex';
    });

    doorone.addEventListener('click', () => openDoor(1));
    doortwo.addEventListener('click', () => openDoor(2));
    doorthree.addEventListener('click', () => openDoor(3));

    const openDoor = (doorNumber) => {
        updateStage();
        document.getElementById('scene2').style.display = 'none';
        document.getElementById('darkscene').style.display = 'flex';
        mypick = doorNumber;
        myanswer = Math.floor(Math.random() * 3) + 1;
    };

    const updateStage = () => {
        document.getElementById('stageTracker').innerHTML = `Stage: ${stage}/5`; 
        document.getElementById('stageTracker2').innerHTML = `Stage: ${stage}/5`;
    }

    darkness.addEventListener('click', () => {
        document.getElementById('darkscene').style.display = 'none';
        if (mypick == myanswer) {
            document.getElementById('scaryscene').style.display = 'flex';
            updateStage();
        } else {
            stage++;
            updateStage();
            if (stage == 6) {
                document.getElementById('winscene').style.display = 'flex';
            } else {
                document.getElementById('safescene').style.display = 'flex';
            }
        }
    });

    scaryscene.addEventListener('click', () => {
        document.getElementById('scaryscene').style.display = 'none';
        document.getElementById('tomscene').style.display = 'flex';
        if (stage == 1) {
            document.getElementById('final2').style.display = 'flex';
        } else {
            document.getElementById('final2').style.display = 'none';
        }
    });

    topone.addEventListener('click', () => hideDoor(1));
    toptwo.addEventListener('click', () => hideDoor(2));
    topthree.addEventListener('click', () => hideDoor(3));

    const hideDoor = (doorNum) => {
        updateStage();
        document.getElementById('tomscene').style.display = 'none';
        yourpick = doorNum;
        youranswer = Math.floor(Math.random() * 3) + 1;
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
    }

    rightscene.addEventListener('click', () => {
        document.getElementById('rightscene').style.display = 'none';
        document.getElementById('scene2').style.display = 'flex';
        if (stage == 5) {
            document.getElementById('final').style.display = 'flex';
        }   else {
            document.getElementById('final').style.display = 'none';
        }
    });

    wrongscene.addEventListener('click', () => {
        document.getElementById('wrongscene').style.display = 'none';
        document.getElementById('tomscene').style.display = 'flex';
        if (stage == 1) {
            document.getElementById('final2').style.display = 'flex';
        } else {
            document.getElementById('final2').style.display = 'none';
        }
    });

    safescene.addEventListener('click', () => {
        document.getElementById('safescene').style.display = 'none';
        document.getElementById('scene2').style.display = 'flex';
        if (stage == 5) {
            document.getElementById('final').style.display = 'flex';
        } else {
            document.getElementById('final').style.display = 'none';
        }
    });

    losebtn.addEventListener('click', () => {
        document.getElementById('losescene').style.display = 'none';
        document.getElementById('scene1').style.display = 'flex';
        stage = 3;
        updateStage();
        document.getElementById('final').style.display = 'none';
    });

    winbtn.addEventListener('click', () => {
        document.getElementById('winscene').style.display = 'none';
        document.getElementById('scene1').style.display = 'flex';
        stage = 3;
        updateStage();
        document.getElementById('final').style.display = 'none';
    });
});


