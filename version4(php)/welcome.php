<!DOCTYPE html>
<html>

<head>
    <link rel="icon" href="assets/images/logo.jpg" type="image/icon type">
    <title>Musifyy</title>
    <link rel="stylesheet" href="assets/css/homepage.css">
    <link rel="stylesheet" href="assets/css/welcome.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
</head>


<body>
    <header>
        <a href="homepage.html" class="logo-wrap">
            <img class="logo" src="assets/images/logo.jpg" alt="" />
            <h2 id="logo-text">MUSIFYY</h2>
        </a>
        <div class="buttons">
            <a class="skip" href="homepage.html">
                    Skip Login

                </a>
        </div>
    </header>

    <?php
// define variables and set to empty values
$nameErr = $emailErr = $passErr = $loginErr = "";
$name = $email = $gender = $comment = $website = "";


$reg1 = "/^[a-zA-Z0-9_]*[a-zA-Z][a-zA-Z0-9_]*$/";
$reg2 = "/^\w+[\S\w+]*@[a-zA-Z]+\.([a-zA-Z]+\.)?[a-zA-Z]+$/";
$reg3 = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,20}$/";

$validated1 = $validated2 = $validated3 = false;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty( $_POST["username"])) {
    $nameErr = "Name is required";
    } else  if(preg_match($reg1,  $_POST["username"])==0){
    $nameErr = "Invalid Username!";
    }else{
        $validated1 = true;
    }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
    } else  if(preg_match($reg2,  $_POST["email"])==0){
        $emailErr = "Invalid Email!";
    }else{
        $validated2 = true;
    }

  if (empty($_POST["password"])) {
    $passErr = "Password is Required";
    } else  if(preg_match($reg3,  $_POST["password"])==0){
    $passErr = "Invalid Password!";
    }else{
        $validated3 = true;
    }

    $name = $_POST["username"];
    $email = $_POST["email"];
    $password  = $_POST["password"];

    if($validated1 && $validated2 && $validated3){
        header ("Location: homepage.html");
    }

    if($_POST["login-username"] == "Qwe_123" && $_POST["login-password"] == "Qwe@123" ){
        header ("Location: homepage.html");
    }else{
        $loginErr = "Invalid Credentials!";
    }

}

?>
    <main>
        <section class="content wc ">
            <div class="form-wrap ">
                <div class="welcome-msg">
                    <h2>
                        Welcome to
                        <div id="logo-text-2">
                            <span id="m">m</span>
                            <span id="u">u</span>
                            <span id="s">s</span>
                            <span id="i">i</span>
                            <span id="f">f</span>
                            <span id="y">y</span>
                            <span id="y2">y</span>
                        </div>
                    </h2>
                    <h3>
                        The best music streaming app <br> where you can enjoy your favourite songs
                    </h3>
                </div>
                <div class="login-form">
                    <form class="login-form-front" name="login"  method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                        <div id="login-msg">
                            <h1 style="text-align: center;">Login </h1>
                        </div>
                        <div class="form-input">
                            <label for="login-username">Username</label>
                            <input placeholder="Your cool name goes here..." autocomplete="off" class="" type="text" id="login-username" name="login-username">
                            <span id="login-usernameError"></span>
                        </div>
                        <div class="form-input">
                            <label for="login-password">Password</label>
                            <input type="password" placeholder="Make sure nobody is looking ;)" autocomplete="off" id="login-password" name="login-password" class="password">
                            <span id="login-passwordError"></span>
                            <div class="showCheck">
                                <input type="checkbox" name="showPass" class="eye" value="Show password"></input>
                                <label for="showPass">Show Password</label>
                            </div>
                        <span id="usernameError"><?php echo $loginErr;?></span>
                        </div>
                        <button>Get Started</button>
                        <span id="signup-link">Don't have an account?  <a>Sign Up</a></span>
                    </form>
                    <!--  -->
                    <form class="login-form-back rotate" name="signup" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"  >
                        <div id="login-msg">
                            <h1 style="text-align: center;">Sign up</h1>
                            <!-- <h4> & be a part of amazing music journey</h4> -->
                        </div>
                        <div class="form-input">
                            <label for="username">Username</label>
                            <input placeholder="Your cool name goes here..." autocomplete="off" class="" type="text" id="username" value="<?php echo $name;?>" name="username">
                            <span id="usernameError"><?php echo $nameErr;?></span>
                        </div>
                        <div class="form-input">
                            <label for="email">Email</label>
                            <input class="" placeholder="We won't spam your mail..." autocomplete="off" type="text" id="email" value="<?php echo $email;?>" name="email">
                            <span id="emailError"><?php echo $emailErr;?></span>
                        </div>
                        <div class="form-input">
                            <label for="password">Password</label>
                            <input  type="password" placeholder="Make sure nobody is looking ;)" autocomplete="off" id="password" value="<?php echo $password;?>" name="password" class="password">

                            <span id="passwordError"><?php echo $passErr;?></span>
                            <div class="showCheck">
                                <input type="checkbox" name="showPass" class="eye" value="Show password"></input>
                                <label for="showPass">Show Password</label>
                            </div>
                        </div>
                        <button>Register</button>
                        <span id="signup-link">Already have an account?  <a>Login</a></span>
                    </form>
                </div>
            </div>
            <footer class="wc">
                <h3>Follow us </h3>

                <div class="icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>

                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                <h4>Created by Omkar Dabir</h4>
            </footer>
        </section>
    </main>
    <script src="assets/js/welcome.js"></script>
</body>
</html>