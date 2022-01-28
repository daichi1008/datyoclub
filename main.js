let count = 0;

const cntUp = function () {
    count += 1;

}

const reply = function () {
    alert(`どうぞどうぞ`.repeat(count));
    count = 0;
}

const cntDown = function () {
    count -= 1
    if (count < 0) {
        alert(`もうだれもいない、、、`)
    }
};