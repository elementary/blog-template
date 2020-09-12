const checkpointMarkers = [...document.querySelectorAll('.js-checkpoint-marker')]
checkpointMarkers.forEach(marker => {
  const checkpointData = getCheckpointData(marker.dataset.checkpoint)
  const checkpointElement = buildCheckpointElement(checkpointData)
  
  marker.replaceWith(checkpointElement);
})

function getCheckpointData(id) {
  return checkpoints.find(item => item.id === id)
}

function buildCheckpointElement(data) {
  const checkpointElement = document.createElement('article')
  checkpointElement.classList.add('checkpoint')
  checkpointElement.innerHTML = `<header class="checkpoint__header"><svg height="16" width="16" style="background-color: black;"></svg><h4 class="checkpoint__title">Checkpoint</h4></header>`
  
  const checkpointContent = document.createElement('div')
  checkpointContent.classList.add('checkpoint__content')
  
  const checkpointQuestion = document.createElement('p')
  checkpointQuestion.classList.add('checkpoint__question')
  checkpointQuestion.innerHTML = data.question
  checkpointContent.appendChild(checkpointQuestion)
  
  const checkpointChoices = document.createElement('div')
  checkpointChoices.classList.add('checkpoint__choices')
  checkpointChoices.innerHTML = buildChoiceButtons(data.choices).join('\n')
  checkpointContent.appendChild(checkpointChoices)
  
  checkpointChoices.addEventListener('click', event => {
    if(event.target.matches('.js-checkpoint')) {
      resetCheckpoint(event.target)
      
      const answerIsCorrect = isAnswerCorrect(event.target)
      if(answerIsCorrect) {
        findParentBySelector(event.target, '.checkpoint')
          .classList.add('correct')
      } else {
        findParentBySelector(event.target, '.checkpoint')
          .classList.add('wrong')
        event.target.classList.add('wrong')
      }
    }
  });
  
  const footer = document.createElement('footer')
  footer.innerHTML = `<p class="feedback feedback--correct">{% include svg/checmark.svg %}${data.feedback && data.feedback.correct? data.feedback.correct : "Tama ka!"}</p>
    <p class="feedback feedback--wrong">${data.feedback && data.feedback.wrong? data.feedback.wrong : "Hindi iyan ang tamang sagot, pero ayos lang. Puwede mo ulit i-try."}</p>`
  
  checkpointElement.appendChild(checkpointContent)
  checkpointElement.appendChild(footer)
  
  return checkpointElement
}

function buildChoiceButtons(choices) {
  const choiceButtons = choices.map(choice => `<button class="btn btn--checkpoint js-checkpoint" ${choice.isCorrect? 'data-correct-answer': ''}>${choice.content}</button>`)
  
  return choiceButtons
}

function isAnswerCorrect(target) {
  return target.hasAttribute('data-correct-answer')
}
  
function resetCheckpoint(eventtarget) {
  const checkpoint = findParentBySelector(eventtarget, '.checkpoint')
  checkpoint.classList.remove('correct', 'wrong')
  const wrongAnswer = checkpoint.querySelector('.wrong')
  
  if(!!wrongAnswer)
      wrongAnswer.classList.remove('wrong')
    
}

 // #region find parent by selector
function collectionHas(a, b) { //helper function (see below)
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}
function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
        cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
}
  // #endregion
