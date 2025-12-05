<?php

namespace Pyz\Yves\ProductListCompareWidget\Widget;


use Generated\Shared\Transfer\ProductViewTransfer;
use Spryker\Yves\Kernel\Widget\AbstractWidget;

class ProductListCompareWidget extends AbstractWidget
{
    protected const PARAMETER_PRODUCT = 'product';
    protected const PARAMETER_SOCIAL_ICONS = 'socialIcons';
    /**
     * @param Generated\Shared\Transfer\ProductViewTransfer
     */
    public function __construct($product)
{
if (is_array($product)) {
        $productTransfer = (new ProductViewTransfer())->fromArray($product, true);
    } elseif ($product instanceof ProductViewTransfer) {
        $productTransfer = $product;
    } else {
        throw new \InvalidArgumentException('Product must be array or ProductViewTransfer');
    }
dd($productTransfer);
    $this->addParameter('product', $productTransfer);

    // $this->addProductParameter($product);
    // $this->addWidgets($socialIcons);
    }

    /**
     * @return void
     */


    protected function addProductParameter(ProductViewTransfer $product): void

    {
        $this->addParameter(static::PARAMETER_PRODUCT, $product);
    }

    // protected function addWidgets(array $socialIcons)
    // {
    //     $this->addParameter(static::PARAMETER_SOCIAL_ICONS, $socialIcons);
    // }

    public static function getName(): string
    {
        return 'ProductListCompareWidget';
    }

    public static function getTemplate(): string
    {
       return '@ProductListCompareWidget/views/product-list-compare-widget/product-list-compare-widget.twig';
    }
}