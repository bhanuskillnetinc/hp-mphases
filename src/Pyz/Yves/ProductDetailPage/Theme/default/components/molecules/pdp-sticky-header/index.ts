import './pdp-sticky-header.scss';
import register from 'ShopUi/app/registry';

export default register(
    'pdp-sticky-header',
    () =>
        import(
            './pdp-sticky-header'
        ),
);
