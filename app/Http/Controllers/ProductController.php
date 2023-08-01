<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use App\Models\Product;
use App\Models\Template1Input;
use App\Models\Template1InputMenu;
use App\Models\Template1InputProductInfo;
use App\Models\Template1InputSpec;
use App\Models\Template1InputGift;
use App\Models\Template1InputProductExtendedInfo;
use App\Models\Template1InputReview;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Response;

use function Termwind\render;

class ProductController extends Controller
{




    public function addProduct()
    {
        return Inertia::render('Product/Pages/AddProduct');
    }



    public function createProduct(Request $request): RedirectResponse
    {
        $request->validate([
            'productName' => 'required|string|max:255|unique:' . Product::class,
            'productTemplateNumber' => 'required|integer|digits_between:1,4',
        ]);

        $productSlug = str_replace(' ', '-', $request->productName);
        $productSlug = str_replace('/', '-', $productSlug);

        $newProduct = Product::create([
            'productSlug' => $productSlug,
            'productName' => $request->productName,
            'productTemplateNumber' => $request->productTemplateNumber,
        ]);


        // dd($newProduct);


        if ($newProduct->productTemplateNumber == 1) {

            $newTemplate1Input =  Template1Input::create([
                'productId' => $newProduct->id,
            ]);

            Template1InputMenu::create([
                'template1InputID' => $newTemplate1Input->id,
            ]);

            Template1InputProductInfo::create([
                'template1InputID' => $newTemplate1Input->id,
            ]);

            Template1InputSpec::create([
                'template1InputID' => $newTemplate1Input->id,
            ]);

            Template1InputGift::create([
                'template1InputID' => $newTemplate1Input->id,
            ]);

            Template1InputProductExtendedInfo::create([
                'template1InputID' => $newTemplate1Input->id,
            ]);

            Template1InputReview::create([
                'template1InputID' => $newTemplate1Input->id,
            ]);
        }

        // return redirect(RouteServiceProvider::HOME);


        return Redirect::route('product.add.templateInput', [$newProduct->productSlug, $newProduct->productTemplateNumber]);
    }

    public function template1Input(Request $request, $productSlug, $productTemplateNumber)
    {

        // $product = DB::table('products')->where('productSlug', $productSlug)->first();

        // $product = Product::where('productSlug', $productSlug)->get()->first();
        $product = Product::where('productSlug', $productSlug)
            ->with(
                'template1Input',
                'template1Input.template1InputMenu',
                'template1Input.template1InputProductInfo',
                'template1Input.template1InputSpec',
                'template1Input.template1InputGift',
                'template1Input.template1InputProductExtendedInfo',
                'template1Input.template1InputReviews',
            )
            ->get()
            ->first();

        // dd($product);

        if (!$product) {
            return Redirect::route('product.add');
        }

        return Inertia::render('Product/Pages/AddProductForm', [
            'product' => $product
        ]);
    }


    public function template1InputReviewPage(Request $request, $productSlug, $productTemplateNumber)
    {

        $product = Product::where('productSlug', $productSlug)
            ->with(
                'template1Input',
                'template1Input.template1InputReviews',
            )
            ->get()
            ->first();

        // dd($product);

        if (!$product) {
            return Redirect::route('product.add');
        }

        return Inertia::render('Product/Pages/AddReviews', [
            'product' => $product
        ]);
    }

    public function template1InputMenu(Request $request)
    {

        FacadesDB::update('update template1_input_menus set leftSide1 = ? , leftSide2 = ? , rightSide1 = ?, rightSide2 = ?, ctaButtonRightSide = ? where template1InputMenuID = ?', [$request->leftSide1, $request->leftSide2, $request->rightSide1, $request->rightSide2, $request->ctaButtonRightSide, $request->template1InputMenuID]);
        return Redirect::route('product.add.templateInput', [$request->productSlug, $request->productTemplateNumber]);
    }

    public function template1InputSpec(Request $request)
    {

        // dd($request);

        FacadesDB::update('update template1_input_specs set specs = ? where template1InputSpecID = ?', [$request->specs, $request->template1InputSpecID]);
        return Redirect::route('product.add.templateInput', [$request->productSlug, $request->productTemplateNumber]);
    }

    public function template1InputGift(Request $request)
    {

        // dd($request);

        FacadesDB::update('update template1_input_gifts set gifts = ? where template1InputGiftID = ?', [$request->gifts, $request->template1InputGiftID]);
        return Redirect::route('product.add.templateInput', [$request->productSlug, $request->productTemplateNumber]);
    }

    public function template1InputProductInfo(Request $request)
    {

        // dd($request);

        FacadesDB::update('update template1_input_product_infos set price = ?, ctaGlobal = ?, shortDescription = ?, main4Benefits = ?, videoLink = ? where template1InputProductInfoID = ?', [$request->price, $request->ctaGlobal, $request->shortDescription, $request->main4Benefits, $request->videoLink, $request->template1InputProductInfoID]);
        return Redirect::route('product.add.templateInput', [$request->productSlug, $request->productTemplateNumber]);
    }

    public function template1InputProductExtendedInfo(Request $request)
    {

        // dd($request);

        FacadesDB::update('update template1_input_product_extended_infos set question1 = ?, question2 = ?, question3 = ?, question4 = ?, question5 = ?, answer1 = ?, answer2 = ?, answer3 = ?, answer4 = ?, answer5 = ? where template1InputProductExtendedInfoID = ?', [$request->question1, $request->question2, $request->question3, $request->question4, $request->question5, $request->answer1, $request->answer2, $request->answer3, $request->answer4, $request->answer5, $request->template1InputProductExtendedInfoID]);
        return Redirect::route('product.add.templateInput', [$request->productSlug, $request->productTemplateNumber]);
    }


    public function template1InputReview(Request $request)
    {

        // dd($request);

        if (!$request->new) {
            FacadesDB::update('update template1_input_reviews set name = ?, star = ?, tagline = ?, date = ?, status = ?, description = ? where template1InputReviewID = ?', [$request->name, $request->star, $request->tagline, $request->date, $request->status, $request->description, $request->template1InputReviewID]);
        } else {
            // dd($request);
            $newReview = Template1InputReview::create([
                'template1InputID' => $request->template1InputID,
            ]);
            FacadesDB::update('update template1_input_reviews set name = ?, star = ?, tagline = ?, date = ?, status = ?, description = ? where template1InputReviewID = ?', [$request->name, $request->star, $request->tagline, $request->date, $request->status, $request->description, $newReview->id]);
        }




        // FacadesDB::update('update template1_input_product_extended_infos set question1 = ?, question2 = ?, question3 = ?, question4 = ?, question5 = ?, answer1 = ?, answer2 = ?, answer3 = ?, answer4 = ?, answer5 = ? where template1InputProductExtendedInfoID = ?', [$request->question1, $request->question2, $request->question3, $request->question4, $request->question5, $request->answer1, $request->answer2, $request->answer3, $request->answer4, $request->answer5, $request->template1InputProductExtendedInfoID]);
        return Redirect::route('product.add.templateInput.review', [$request->productSlug, $request->productTemplateNumber]);
    }



    public function selectTemplate(Request $request, $template_id)
    {

        if ($template_id <= 0 || $template_id > 4) {
            return Redirect::route('dashboard');
        }

        return Inertia::render('Product/Pages/AddProductForm', [
            'template_id' => $template_id,
        ]);
    }

    public function addSection(Request $request, $template_id, $add_section)
    {
        if ($add_section == 'add-menu') {
            return Inertia::render('Product/Components/MenuFormTemplate1');
        } else if ($add_section == 'add-product-info') {
            return Inertia::render('Product/Components/ProductInfoFormTemplate1');
        } else if ($add_section == 'add-spec') {
            return Inertia::render('Product/Components/SpecFormTemplate1');
        } else if ($add_section == 'add-gifts') {
            return Inertia::render('Product/Components/GiftsFormTemplate1');
        } else if ($add_section == 'add-product-extended-info') {
            return Inertia::render('Product/Components/ProductExtendedInfoFormTemplate1');
        } else if ($add_section == 'add-reviews') {
            return Inertia::render('Product/Components/ReviewsFormTemplate1');
        } else if ($add_section == 'add-social-media-handles') {
            return Inertia::render('Product/Components/SocialMediaHandlesFormTemplate1');
        } else {
            return Redirect::route('product.add.template', 1);
        }
    }

    public function productPayment()
    {

        return Inertia::render('Payment/PaymentForm');
    }





    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
