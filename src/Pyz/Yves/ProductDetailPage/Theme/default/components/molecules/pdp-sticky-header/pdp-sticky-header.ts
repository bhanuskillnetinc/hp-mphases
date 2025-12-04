import Component from 'ShopUi/models/component';
export default class PdpStickyHeader extends Component {
    protected trigger: HTMLElement;
    protected scrollHandler: () => void;

    protected readyCallback(): void {
        // Initial hidden state (optional)
        this.setInitialStyles();
    }

    protected init(): void {
        this.trigger = <HTMLElement>this.getElementsByClassName('js-pdp-sticky-header')[0];
        this.scrollHandler = () => this.onScroll();
        this.mapEvents();
    }

    protected mapEvents(): void {
        this.trigger.addEventListener('scroll', this.scrollHandler);
    }

    /**
     * Applies initial inline styles similar to console JS
     */
    protected setInitialStyles(): void {
        this.style.opacity = '0';
    }

    protected onScroll(): void {
        console.log("stickyyyyy");
        const threshold = 150; // Show after scrolling 150px
        const hasScrolledEnough = window.scrollY > threshold;

        if (hasScrolledEnough) {
            this.showStickyHeader();
        } else {
            this.hideStickyHeader();
        }
    }

    protected showStickyHeader(): void {
        this.style.opacity = '1';
        this.classList.add('pdp-sticky-header--visible');
    }

    protected hideStickyHeader(): void {
        this.style.opacity = '0';
        this.classList.remove('pdp-sticky-header--visible');
    }
}
