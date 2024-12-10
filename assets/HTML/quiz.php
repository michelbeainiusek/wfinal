

<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") { //check if submited in post method
        // Answers key
        $answers = [ //assosiative array with values
            'q1' => 'b', //key=>value
            'q2' => 'b',
            'q3' => 'a'
        ];

        $score = 0; //intialize score 

        // Calculate score
        foreach ($answers as $question => $correctAnswer) { //foreach answer in array above key=question and value=ca
            if (isset($_POST[$question]) && $_POST[$question] === $correctAnswer) { // check if postquestion (answer) was submitted and if   is equal to answer
                $score++; // increment 
            }
        }

        $totalQuestions = count($answers); //count questions in answers array
        $percentage = ($score / $totalQuestions) * 100; //percentage
        echo "<div id='result' class='result'>"; // output 
        echo "You scored $score out of $totalQuestions. Your grade is " . number_format($percentage, 2) . "%.";
        echo "</div>";
    }
    ?>
