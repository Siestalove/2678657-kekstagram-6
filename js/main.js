const massMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const massNames = [
  'Артём',
  'Елена',
  'Андрей',
  'Екатерина',
  'Данил',
  'Ольга'
];

const massUniqId = [];

function generateUniqId() {
  const i = Math.floor(Math.random() * (933 - 1 + 1)) + 1;
  if(massUniqId.includes(i)){
    return generateUniqId();
  }
  else {
    massUniqId.push(i);
    return i;
  }
}

function generateMessage() {
  let message = '';
  const countMessage = Math.floor(Math.random() * 2) + 1;
  const usedIndexes = [];

  for(let i = 0; i < countMessage; i++) {
    let randomIndex;
    do
    {
      randomIndex = Math.floor(Math.random() * massMessages.length);
    }
    while (usedIndexes.includes(randomIndex));

    usedIndexes.push(randomIndex);
    message += `${massMessages[randomIndex]  } `;
  }

  return message;
}


function generateComments(count) {
  const massiveCommentsObj = [];
  for(let i = 0 ; i<count; i++){
    const commentObj = {
      id: generateUniqId(),
      avatar: `img/avatar-${Math.floor(Math.random() * (6 - 1 + 1)) + 1}.svg`,
      message: generateMessage(),
      name: massNames[Math.floor(Math.random() * massNames.length)],
    };
    massiveCommentsObj.push(commentObj);
  }
  return massiveCommentsObj;
}

function generateObjects() {
  const massiveObject = [];
  for(let i = 1; i<26; i++){
    const obj = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Описание фотографии.',
      likes: Math.floor(Math.random() * (200 - 15 + 1)) + 15,
      comments: generateComments(Math.floor(Math.random() * (30 - 0 + 1)) + 0),
    };
    massiveObject.push(obj);
  }
  return massiveObject;
}

generateObjects();
