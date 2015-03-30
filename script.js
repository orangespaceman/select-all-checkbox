/**
 * form utilities
 * @author pete goodman
 *
 */
var formUtil = {

    /**
     * functions to clear a textbox of text
     * @param id string the id of the text field in question
     */
    autoFill : function (id){

        // retrieve the field, and access it's default text
        var field = document.getElementById(id);
        var defaulttext = field.value;

        // if default text is present when selected, hide it
        field.onfocus = function() {
            if (this.value == defaulttext) {
                this.value = "";
            }
        }

        // if no text is entered on exit, replace default text
        field.onblur = function() {
            if (this.value == "") {
                this.value = defaulttext;
            }
        }
    },


    /**
     * functions to select or deselect all checkboxes
     * @param parentcheckbox string the id of the parent check box that toggles the rest
     * @param childboxcontainer string the id of the html container for all child checkboxes
     */
    toggleCheckboxes : function (parentcheckbox, childboxcontainer) {

        // detect when the parent checkbox value is changed
        var parentCheckbox = document.getElementById(parentcheckbox);
        parentCheckbox.onclick = function() {
            switchfields(this.checked);
        }

        //get child checkboxes
        var container = document.getElementById(childboxcontainer);
        var childCheckboxes = container.getElementsByTagName('input');

         // traverse and check
        function switchfields(checkOnOff) {
             for (var i=0; i < childCheckboxes.length; i++) {
                childCheckboxes[i].checked = checkOnOff;
             }
        }
    }
}