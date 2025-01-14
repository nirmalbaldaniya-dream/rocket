import { Layout, renderJoiningGroup } from '@rocket/engine';
import { pageDefaults } from '@rocket/components';
import { html, nothing } from 'lit';

export class LayoutHome extends Layout {
  constructor(options) {
    super(options);
    this.options = {
      ...this.options,
      ...pageDefaults({ ...options }),
      ...options,
    };

    this.options = {
      ...this.options,
      head__100: html`
        <link
          rel="preload"
          href="/fonts/Rubik-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link rel="stylesheet" href="resolve:@rocket/spark/css/fluid-type-scale.css" />
        <link rel="stylesheet" href="resolve:@rocket/spark/css/fluid-space.css" />
        <link rel="stylesheet" href="resolve:@rocket/spark/css/content.css" />
      `,

      header__50: data => {
        if (!this.options.pageTree) {
          return nothing;
        }
        const page = this.options.pageTree.getPage(data.sourceRelativeFilePath);
        if (page.model.headlinesWithId) {
          return html`
            ${page.model.headlinesWithId.map(
              headline => html`
                <a class="headline-link" href="/#${headline.id}">${headline.text}</a>
              `,
            )}
          `;
        }
      },
    };
  }

  renderHeader() {
    return html`
      <rocket-header-scroll-menu>
        ${renderJoiningGroup('header', this.options, this.data)}
      </rocket-header-scroll-menu>
    `;
  }
}
