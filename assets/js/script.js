/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    if ($('#steps').length) {
        $('#steps').steps({
            onFinish: function () { alert('complete'); }
        });
    }

    // $('.clone-body')
    $(function () {
        if ($('.btn-clone').length && $('.clone-body').length) {
            $(document).on('click', '.btn-clone', function (event) {
                event.preventDefault();
                var $clone = $(this).closest('.clone-data').clone(true);
                var $newButtons = `
                            <button type="button" class="btn btn-add btn-remove">
                                <i class="ni ni-minus"></i>
                            </button>`;
                $clone.find('.btn-clone-group').html($newButtons).end().appendTo($(this).closest('.clone-data').parent().find('.clone-body'));
            });
            $(document).on('click', '.btn-remove', function (event) {
                event.preventDefault();
                $(this).closest('.clone-data').remove();
            });
        }
    });

});
