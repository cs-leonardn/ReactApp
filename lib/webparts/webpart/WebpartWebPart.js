var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './WebpartWebPart.module.scss';
import * as strings from 'WebpartWebPartStrings';
var WebpartWebPart = /** @class */ (function (_super) {
    __extends(WebpartWebPart, _super);
    function WebpartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebpartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.webpart + "\">\n    <div class=\"" + styles.container + "\">\n      <div class=\"" + styles.row + "\">\n        <div class=\"" + styles.column + "\">\n          <span class=\"" + styles.title + "\">Welcome to SharePoint!</span>\n  <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n    <p class=\"" + styles.description + "\">" + escape(this.properties.description) + "</p>\n      <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n        <span class=\"" + styles.label + "\">Learn more</span>\n          </a>\n          </div>\n          </div>\n          </div>\n          </div>";
    };
    Object.defineProperty(WebpartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    WebpartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return WebpartWebPart;
}(BaseClientSideWebPart));
export default WebpartWebPart;
//# sourceMappingURL=WebpartWebPart.js.map