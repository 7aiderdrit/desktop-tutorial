<!DOCTYPE html>
<html>
<head>
  <title>Registration Page</title>
  <link rel="stylesheet" type="text/css" href="log.css" />
</head>
<body>
<div class="container">
  <div class="row col-md-6 col-md-offset-3">
    <div class="panel panel-primary">
      <div class="panel-heading text-center">
        <h1>Registration Form</h1>
      </div>
      <div class="panel-body">
        <?php
        // Check if the form is submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          // Retrieve form data
          $firstName = $_POST['firstName'];
          $lastName = $_POST['lastName'];
          $gender = $_POST['gender'];
          $email = $_POST['email'];
          $password = $_POST['password'];
          $number = $_POST['number'];

          // Connect to your database
          $host = 'localhost';
          $user = 'root';
          $pass = '';
          $db = 'websat'; // Database name
          $con = mysqli_connect($host, $user, $pass, $db);

          // Check connection
          if (!$con) {
            die("Connection failed: " . mysqli_connect_error());
          }

          // Insert data into database
          $sql = "INSERT INTO users (firstName, lastName, gender, email, password, number)
                  VALUES ('$firstName', '$lastName', '$gender', '$email', '$password', '$number')";

          if (mysqli_query($con, $sql)) {
            echo "Registration successful!";
          } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($con);
          }

          // Close database connection
          mysqli_close($con);
        }
        ?>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" required />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" required />
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <div>
              <label for="male" class="radio-inline"><input type="radio" name="gender" value="Male" id="male" required />Male</label>
              <label for="female" class="radio-inline"><input type="radio" name="gender" value="Female" id="female" />Female</label>
              <label for="others" class="radio-inline"><input type="radio" name="gender" value="Others" id="others" />Others</label>
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" required />
          </div>
          <div class="form-group">
            <label for="number">Phone Number</label>
            <input type="tel" class="form-control" id="number" name="number" required />
          </div>
          <input type="submit" class="btn btn-primary" />
        </form>
      </div>
      <div class="panel-footer text-right">
        <small>&copy; Technical Babaji</small>
      </div>
    </div>
  </div>
</div>
</body>
</html>
