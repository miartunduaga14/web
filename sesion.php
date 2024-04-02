use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitaController;

Route::get('/visitas', [VisitaController::class, 'contarVisitas']);

//codigo de crear controlador
php artisan make:controller VisitaController

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VisitaController extends Controller
{
    public function contarVisitas(Request $request)
    {
        // Incrementa el contador de visitas en la sesión.
        $visitas = $request->session()->increment('visitas', 1);

        // Devuelve una respuesta con el número de visitas.
        return "Esta página ha sido visitada {$visitas} veces.";
    }
}
