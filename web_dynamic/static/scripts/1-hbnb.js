$(document).ready(amnty);

function amnty () {
    const amntydict = {};
    $('.amenities .popover input').change(function () {
        if ($(this).is(':checked')) {
            amntydict[$(this).attr('data-name')] = $(this).attr('data-id');
        } else if ($(this).is(':not(:checked)')) {
            delete amntydict[$(this).attr('data-name')];
        }
        const keys = Object.keys(amntydict);
        $('.amenities h4').text(keys.sort().join(', '));
    });
}
