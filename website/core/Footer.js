/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro.html')}>
              Introduction
            </a>
            <a href={this.docUrl('user-guide/user-guide-start.html')}>
              User Guide
            </a>
            <a href={this.docUrl('dev-guide/dev-guide-start.html')}>
              Developer Guide
            </a>
            <a href={this.docUrl('devops-guide/devops-guide-start.html')}>
              Self-Hosting Guide
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://community.jitsi.org"
              target="_blank"
              rel="noreferrer noopener">
              Project Forum
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a
              href="https://github.com/jitsi/jitsi-meet"
              target="_blank"
              rel="noreferrer noopener">
              Jitsi Meet on GitHub
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/jitsi/jitsi-meet/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            <a
              href="https://github.com/jitsi/handbook"
              target="_blank"
              rel="noreferrer noopener">
              Handbook on GitHub
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            <a
              href="https://jaas.8x8.vc"
              target="_blank"
              rel="noreferrer noopener">
              JaaS: Jitsi as a Service
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
