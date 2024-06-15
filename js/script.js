const myData = {
    name: {
        label: '名前を教えてください',
        data: '福本 佑介'
    },
    company: {
        label: '所属を教えてください',
        data: 'フリーランス'
    },
    job: {
        label: 'お仕事を教えてください',
        data: ['Webコーダー', 'Webディレクション', '講師',]
    },
    skills: {
        label: '何ができますか？',
        data: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress',]
    },
    hobby: {
        label: '趣味を教えてください',
        data: ['ゲーム', 'バイク', 'パン作り', 'お酒', '落語・講談',]
    },
    history: {
        label: '経歴を教えてください',
        data: '元々はシステム開発の企業で働いていましたが、Web業界では健康食品の通販会社、Web制作会社を経て、現在はフリーランスとして、Web制作全般や講師業をしています。'
    },
    message: {
        label: '何か一言お願いします',
        data: 'プログラミングはとても便利なツールです。基礎から最近のトレンドまで交えながら解説していくので、楽しみながら学習していきましょう！'
    },
}

function nl2br(str) {
    return str.replace(/\n/g, '<br>');
}

window.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.querySelector('.button-container');
    const displayArea = document.querySelector('.display-area');

    for (let prop in myData) {
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', prop);
        button.innerHTML = myData[prop].label;
        buttonContainer.append(button);

        button.addEventListener('click', (e) => {
            displayArea.innerHTML = '';
            let targetId = e.target.id;
            switch (targetId) {
                case 'name':
                    displayArea.innerHTML = `「${myData[e.target.id].data}」です。`;
                    break;
                case 'company':
                    displayArea.innerHTML = `${myData[e.target.id].data}で活動しています。`;
                    break;
                case 'job':
                    displayArea.innerHTML = '主に';
                    myData[e.target.id].data.forEach((value, index) => {
                        if (index != 0) {
                            displayArea.innerHTML += '、';
                        }
                        displayArea.innerHTML += `「${value}」`;
                    });
                    displayArea.innerHTML += 'をしています。';
                    break;
                case 'skills':
                    displayArea.innerHTML = 'Web系では'
                    myData[e.target.id].data.forEach((value, index) => {
                        if (index != 0) {
                            displayArea.innerHTML += '、';
                        }
                        displayArea.innerHTML += `「${value}」`;
                    });
                    displayArea.innerHTML += 'ができます。';
                    break;
                case 'hobby':
                    displayArea.innerHTML = '最近の趣味は'
                    myData[e.target.id].data.forEach((value, index) => {
                        if (index != 0) {
                            displayArea.innerHTML += '、';
                        }
                        displayArea.innerHTML += `「${value}」`;
                    });
                    displayArea.innerHTML += 'です。';
                    break;
                case 'history':
                case 'message':
                    displayArea.innerHTML = `<p>${nl2br(myData[e.target.id].data)}</p>`;
                    break;
            }
        });
    }
});