var quiz = {
  user: "Dave",
  questions: [
  {
    text: "Find the mean of 6, 7, 8, 11 and 6",
    responses: [
    { text: "8.4" },
    { text: "7.6", correct: true },
    { text: "7.3" },
    { text: "8.6" }] },


  {
    text: "Find the mean of the first 4 odd numbers",
    responses: [
    { text: "4", correct: true },
    { text: "4.8" },
    { text: "5" },
    { text: "3.9" }] },


  {
    text: "Find the mean of 16, 13, 10, 23 and 7",
    responses: [
    { text: "14.2" },
    { text: "13.8", correct: true },
    { text: "13.7" },
    { text: "14.5" }] },


  {
    text: "Find the mean of the first 6 prime numbers",
    responses: [
    { text: "6.83", correct: true },
    { text: "7.92" },
    {
      text: "5.2" },

    { text: "None of the above" }] },


  {
    text: "Find the mean of the first 10 even numbers",
    responses: [
    { text: "12.2 " },
    {
      text: "12" },

    { text: "11", correct: true },
    { text: "10.7" }] },


  {
    text:
    "Find the median of 65, 68, 71, 74, 80",
    responses: [
    { text: "73.3" },
    { text: "74" },
    { text: "71", correct: true },
    { text: "72.1" }] },


  {
    text: "Find the median of the only even prime number and the 7th composite number ",
    responses: [
    { text: " 8", correct: true },
    { text: "8.6 " },
    {
      text: "9" },

    { text: "8.8" }] },


  {
    text: "Is the median of 85, 20 & 25, even or odd?",
    responses: [
    { text: "Odd", correct: true },
    { text: "True " }] },


  {
    text:
    "Find the median of (55-32), (33+66), (10+20*20 [BODMAS])",
    responses: [
    {
      text: "98.5" },

    { text: "101.74 " },
    { text: "99", correct: true },
    { text: "98.2" }] },


  {
    text: "Select the Correct Median Pair",
    responses: [
    { text: "20&50 = 33.5" },
    { text: "45&90 = 67.5", correct: true },
    { text: "30&95 = 60" },
    { text: "10&67 = 35" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });