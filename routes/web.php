<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB as FacadesDB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome/Welcome');
});

Route::get('/product', function () {
    return Inertia::render('Welcome/Pages/Product');
});
Route::get('/about-us', function () {
    return Inertia::render('Welcome/Pages/AboutUs');
});
Route::get('/contact-us', function () {
    return Inertia::render('Welcome/Pages/ContactUs');
});
Route::get('/privacy-policy', function () {
    return Inertia::render('Welcome/Pages/PrivacyPolicy');
});
Route::get('/return-policy', function () {
    return Inertia::render('Welcome/Pages/ReturnPolicy');
});
Route::get('/faqs', function () {
    return Inertia::render('Welcome/Pages/Faqs');
});
// Route::get('/add-reviews', function () {
//     return Inertia::render('Product/Pages/AddReviews');
// });

Route::get('/dashboard', function () {
    $products = FacadesDB::table('products')->get();

    // dd($product);
    return Inertia::render('Product/Dashboard', [
        'products' => $products
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



    Route::get('/addproduct', [ProductController::class, 'addProduct'])->name('product.add');
    Route::post('/createproduct', [ProductController::class, 'createProduct'])->name('createproduct');
    // Route::get('/product/{productSlug}/template/{productTemplateNumber}', [ProductController::class, 'templateInput'])->name('product.add.templateInput');
    // Route::get('/product/{productSlug}/template/{productTemplateNumber}/review', [ProductController::class, 'templateInput'])->name('product.add.templateInput');
    Route::get('/product/{productSlug}/template/{productTemplateNumber}', [ProductController::class, 'template1Input'])->name('product.add.templateInput');
    // Route::post('/product/{productSlug}/template/{productTemplateNumber}/createmenu', [ProductController::class, 'createProduct'])->name('template1createmenu');
    Route::post('/product/createMenu', [ProductController::class, 'template1InputMenu'])->name('template1CreateMenu');
    Route::post('/product/createSpec', [ProductController::class, 'template1InputSpec'])->name('template1CreateSpec');
    Route::post('/product/createGift', [ProductController::class, 'template1InputGift'])->name('template1CreateGift');
    Route::post('/product/createProductInfo', [ProductController::class, 'template1InputProductInfo'])->name('template1CreateProductInfo');
    Route::post('/product/createProductExtendedInfo', [ProductController::class, 'template1InputProductExtendedInfo'])->name('template1CreateProductExtendedInfo');
    Route::post('/product/createReview', [ProductController::class, 'template1InputReview'])->name('template1CreateReview');
    Route::get('/product/{productSlug}/template/{productTemplateNumber}/add-reviews', [ProductController::class, 'template1InputReviewPage'])->name('product.add.templateInput.review');




    // Route::get('/product/{productSlug}/template/{productTemplateNumber}/add?', [ProductController::class, 'template1Input'])->name('product.add.templateInput12');



    Route::get('/addproduct/template/{template_id}', [ProductController::class, 'selectTemplate'])->name('product.add.template');
    Route::get('/addproduct/template/{template_id}/{add_section}', [ProductController::class, 'addSection'])->name('product.add.section');
    Route::get('/product/payment', [ProductController::class, 'productPayment'])->name('product.payment');
});

require __DIR__ . '/auth.php';
