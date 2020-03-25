<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Auth exemple</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/app.css">
        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>
    <body style="background-color: #e9ecef">
        <div id="app"></div> 
        <script>
            var BASE_URL = "{{URL::to('/')}}";
        </script>
        <!-- REQUIRED SCRIPTS -->
        <script src="/js/app.js"></script>
    </body>
</html>
