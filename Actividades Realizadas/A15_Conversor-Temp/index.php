<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor Temperatura</title>
</head>
<body>
    <div>
    <form method="post">
        <h1>Conversor de Temperatura</h1>
        <p>Selecciona la temperatura que deseas convertir</p>
        <input type="number" name="valor" placeholder="Valor a convertir" step="any" required 

        value="<?= isset($_POST['valor']) ? htmlspecialchars($_POST['valor']) : '' ?>">
        <select name="origen" required>
            <option value="Celsius" <?= (isset($_POST['origen']) && $_POST['origen'] == 'Celsius') ? 'selected' : '' ?>>Celsius</option>
            <option value="Fahrenheit" <?= (isset($_POST['origen']) && $_POST['origen'] == 'Fahrenheit') ? 'selected' : '' ?>>Fahrenheit</option>
            <option value="Kelvin" <?= (isset($_POST['origen']) && $_POST['origen'] == 'Kelvin') ? 'selected' : '' ?>>Kelvin</option>
        </select>

        <span> a </span>

        <select name="destino" required>
            <option value="Celsius" <?= (isset($_POST['destino']) && $_POST['destino'] == 'Celsius') ? 'selected' : '' ?>>Celsius</option>
            <option value="Fahrenheit" <?= (isset($_POST['destino']) && $_POST['destino'] == 'Fahrenheit') ? 'selected' : '' ?>>Fahrenheit</option>
            <option value="Kelvin" <?= (isset($_POST['destino']) && $_POST['destino'] == 'Kelvin') ? 'selected' : '' ?>>Kelvin</option>
        </select>

        <input type="submit" value="Convertir">
    </form>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $valor = floatval($_POST['valor']);
                $origen =  $_POST['origen'];
                $destino =  $_POST['destino'];
                $resultado = 0;

                if ($origen == $destino) {
                    $resultado = $valor;
                }
                if ($origen == "Celsius") {
                    if ($destino == "Fahrenheit") {
                        $resultado = ($valor * 9/5) + 32;
                    } elseif ($destino == "Kelvin") {
                        $resultado = $valor + 273.15;
                    }
                } elseif ($origen == "Fahrenheit") {
                    if ($destino == "Celsius") {
                        $resultado = ($valor - 32) * 5/9;
                    } elseif ($destino == "Kelvin") {
                        $resultado = ($valor - 32) * 5/9 + 273.15;
                    }
                } elseif ($origen == "Kelvin") {
                    if ($destino == "Celsius") {
                        $resultado = $valor - 273.15;
                    } elseif ($destino == "Fahrenheit") {
                        $resultado = ($valor - 273.15) * 9/5 + 32;
                    }
                }
                echo "<h2>Resultado: $valor ° $origen equivale a $resultado ° $destino</h2>";
            }

        ?>
    </div>
</body>
</html>