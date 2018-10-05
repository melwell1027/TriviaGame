$(document).ready(function () {

    $(".answer").hide();
    $("#correct_box").hide();
    $("#incorrect_box").hide();
    $("#timer_box").hide();

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var currentQuestion = 0;
    var questionCount = 0;

    $("#startButton").on("click", function () {
        $("#startButton").hide()
        $(".answer").show();
        $("#correct_box").show();
        $("#incorrect_box").show();
        $("#timer_box").show();

        roundStart();
    });

    function roundStart() {

        $("#correct_total").text(correctAnswers);
        $("#incorrect_total").text(incorrectAnswers);
        displayQuestion();
        console.log(currentQuestion, "cq");
        console.log(questionCount, "qc");


        var totalTime;
        var intervalId;

        totalTime = 31;
        intervalId = setInterval(function () {
            totalTime--

            if (totalTime === 0) {
                clearInterval(intervalId)
                currentQuestion++;
                incorrectAnswers++;
                $('#times_up_message').fadeIn('slow', function () {
                    $('#times_up_message').delay(5000).fadeOut();
                });
                setTimeout(function () {
                    roundStart();
                }, 5000);
            }

            $("#timer").text(totalTime);
        }, 1000);

        $(".answer").on("click", function () {
            clearInterval(intervalId);
        })
    }

    function displayQuestion() {
        $("#question").text(questions[currentQuestion].text);

        $("#label_answer_1").text(questions[currentQuestion].answer_1);
        $("#label_answer_2").text(questions[currentQuestion].answer_2);
        $("#label_answer_3").text(questions[currentQuestion].answer_3);
        $("#label_answer_4").text(questions[currentQuestion].answer_4);

    }

    function displayAnswer() {
        $("#correct_answer_was").text(questions[currentQuestion].printedAnswer);
    }

    $(".answer").on("click", function () {
        var selectedAnswer = $(this).attr("id");
        if (selectedAnswer === questions[questionCount].correctAnswer) {
            $('#correct_message').fadeIn('slow', function () {
                $('#correct_message').delay(5000).fadeOut();
                correctAnswers++;
            });
            currentQuestion++;

        } else {
            incorrectAnswers++;
            displayAnswer();
            $('#incorrect_answer_message').fadeIn('slow', function () {
                $('#incorrect_answer_message').delay(5000).fadeOut();
            });
            currentQuestion++;
        }
        questionCount++;
        setTimeout(function () {
            if (currentQuestion == 10) {
                $("#results").show();
                $("#correct_results").text(correctAnswers);
                $("#incorrect_results").text(incorrectAnswers);
            }
            roundStart();
        }, 5000);
    })

    var questions = [
        {
            text: "This is question 1",
            answer_1: "This is incorrect",
            answer_2: "This is incorrect",
            answer_3: "This is correct",
            answer_4: "This is incorrect",
            correctAnswer: "answer_3",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 2",
            answer_1: "This is correct",
            answer_2: "This is incorrect",
            answer_3: "This is incorrect",
            answer_4: "This is incorrect",
            correctAnswer: "answer_1",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 3",
            answer_1: "This is incorrect",
            answer_2: "This is incorrect",
            answer_3: "This is incorrect",
            answer_4: "This is correct",
            correctAnswer: "answer_4",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 4",
            answer_1: "This is correct",
            answer_2: "This is incorrect",
            answer_3: "This is incorrect",
            answer_4: "This is incorrect",
            correctAnswer: "answer_1",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 5",
            answer_1: "This is incorrect",
            answer_2: "This is correct",
            answer_3: "This is incorrect",
            answer_4: "This is incorrect",
            correctAnswer: "answer_2",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 6",
            answer_1: "This is incorrect",
            answer_2: "This is incorrect",
            answer_3: "This is correct",
            answer_4: "This is incorrect",
            correctAnswer: "answer_3",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 7",
            answer_1: "This is correct",
            answer_2: "This is incorrect",
            answer_3: "This is incorrect",
            answer_4: "This is incorrect",
            correctAnswer: "answer_1",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 8",
            answer_1: "This is incorrect",
            answer_2: "This is incorrect",
            answer_3: "This is incorrect",
            answer_4: "This is correct",
            correctAnswer: "answer_4",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 9",
            answer_1: "This is incorrect",
            answer_2: "This is correct",
            answer_3: "This is incorrect",
            answer_4: "This is incorrect",
            correctAnswer: "answer_2",
            printedAnswer: "This is correct",
        },
        {
            text: "This is question 10",
            answer_1: "This is correct",
            answer_2: "This is incorrect",
            answer_3: "This is incorrect",
            answer_4: "This is incorrect",
            correctAnswer: "answer_1",
            printedAnswer: "This is correct",
        },
    ]

})