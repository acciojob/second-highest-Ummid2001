//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Second Highest Element</title>
</head>
<body>
    <script>
        function secondHighest(arr) {
            if (arr.length < 2) {
                return -Infinity;
            }

            let max = -Infinity;
            let secondMax = -Infinity;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] < max && arr[i] > secondMax) {
                    secondMax = arr[i];
                }
            }

            if (secondMax === -Infinity) {
                return -Infinity;
            }

            return secondMax;
        }

   
    </script>
</body>
</html>