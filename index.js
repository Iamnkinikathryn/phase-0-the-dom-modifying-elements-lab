// Write your code here!
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Katherin is the champion';
document.body.append(newHeader);
