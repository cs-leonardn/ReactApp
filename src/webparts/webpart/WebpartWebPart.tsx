import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./WebpartWebPart.module.scss";
import * as strings from "WebpartWebPartStrings";
import _ from "lodash";
import ant from "antd";

export interface IWebpartWebPartProps {
  description: string;
}

export default class WebpartWebPart extends BaseClientSideWebPart<
  IWebpartWebPartProps
> {
  public render(): JSX.Element {
    return (
      <div className="${styles.webpart}">
        <div className="${styles.container}">
          <div className="${styles.row}">
            <div className="${styles.column}">
              <span className="${styles.title}">SharePoint Webpart!</span>
              <p className="${styles.subTitle}">
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className="${styles.description}">
                ${escape(this.properties.description)}
              </p>
              <a href="https://aka.ms/spfx" className="${styles.button}">
                <span className="${styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <ant.DatePicker />
      </div>
    );
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
