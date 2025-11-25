import $ from 'jquery';

$("select[id='store-selector']").on('change', () => {
    $("form[id='store-form']").submit();
})