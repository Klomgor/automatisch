import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { SitemapStream } from 'sitemap';
import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi';

const BASE = process.env.BASE_URL || '/';
const OPENAPI_JSON_URL =
  process.env.VITE_OPENAPI_JSON_URL || 'http://localhost:3000/api/openapi.json';

const links = [];
const PROD_BASE_URL = 'https://automatisch.io/docs';

export default async () => {
  const openapiSpec = await (await fetch(OPENAPI_JSON_URL)).json();

  const sidebar = useSidebar({
    spec: openapiSpec,
    linkPrefix: '/api-docs/',
  });

  return defineConfig({
    base: BASE,
    lang: 'en-US',
    title: 'Automatisch Docs',
    description:
      'Build workflow automation without spending time and money. No code is required.',
    cleanUrls: 'with-subfolders',
    ignoreDeadLinks: true,
    themeConfig: {
      siteTitle: 'Automatisch',
      nav: [
        {
          text: 'Guide',
          link: '/',
          activeMatch: '^/$|^/guide/',
        },
        {
          text: 'API Docs',
          link: '/api-docs',
          activeMatch: '^/api-docs/',
        },
        {
          text: 'Apps',
          link: '/apps/airbrake/connection',
          activeMatch: '/apps/',
        },
      ],
      sidebar: {
        '/api-docs': [
          ...sidebar.generateSidebarGroups({
            linkPrefix: '/api-docs/',

            // Optionally, you can specify a list of tags to generate sidebar items. Default is all tags.
            //tags: [],
          }),
        ],
        '/apps/': [
          {
            text: 'Airbrake',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Triggers',
                link: '/apps/airbrake/triggers',
              },
              {
                text: 'Connection',
                link: '/apps/airbrake/connection',
              },
            ],
          },
          {
            text: 'Airtable',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/airtable/actions' },
              { text: 'Connection', link: '/apps/airtable/connection' },
            ],
          },
          {
            text: 'Anthropic',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/anthropic/actions' },
              { text: 'Connection', link: '/apps/anthropic/connection' },
            ],
          },
          {
            text: 'Appwrite',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/appwrite/triggers' },
              { text: 'Connection', link: '/apps/appwrite/connection' },
            ],
          },
          {
            text: 'Asana',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/asana/actions' },
              { text: 'Connection', link: '/apps/asana/connection' },
            ],
          },
          {
            text: 'Better Stack',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/better-stack/actions' },
              { text: 'Connection', link: '/apps/better-stack/connection' },
            ],
          },
          {
            text: 'Brave Search',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/brave-search/actions' },
              { text: 'Connection', link: '/apps/brave-search/connection' },
            ],
          },
          {
            text: 'Carbone',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/carbone/actions' },
              { text: 'Connection', link: '/apps/carbone/connection' },
            ],
          },
          {
            text: 'Changedetection',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/changedetection/triggers' },
              { text: 'Actions', link: '/apps/changedetection/actions' },
              { text: 'Connection', link: '/apps/changedetection/connection' },
            ],
          },
          {
            text: 'ClickUp',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/clickup/actions' },
              { text: 'Triggers', link: '/apps/clickup/triggers' },
              { text: 'Connection', link: '/apps/clickup/connection' },
            ],
          },
          {
            text: 'Cryptography',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/cryptography/actions' },
              { text: 'Connection', link: '/apps/cryptography/connection' },
            ],
          },
          {
            text: 'Datastore',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/datastore/actions' },
              { text: 'Connection', link: '/apps/datastore/connection' },
            ],
          },
          {
            text: 'DeepL',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/deepl/actions' },
              { text: 'Connection', link: '/apps/deepl/connection' },
            ],
          },
          {
            text: 'Delay',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/delay/actions' },
              { text: 'Connection', link: '/apps/delay/connection' },
            ],
          },
          {
            text: 'Discord',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/discord/actions' },
              { text: 'Connection', link: '/apps/discord/connection' },
            ],
          },
          {
            text: 'Disqus',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/disqus/triggers' },
              { text: 'Connection', link: '/apps/disqus/connection' },
            ],
          },
          {
            text: 'Dropbox',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/dropbox/triggers' },
              { text: 'Actions', link: '/apps/dropbox/actions' },
              { text: 'Connection', link: '/apps/dropbox/connection' },
            ],
          },
          {
            text: 'Eventbrite',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/eventbrite/triggers' },
              { text: 'Actions', link: '/apps/eventbrite/actions' },
              { text: 'Connection', link: '/apps/eventbrite/connection' },
            ],
          },
          {
            text: 'Filter',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/filter/actions' },
              { text: 'Connection', link: '/apps/filter/connection' },
            ],
          },
          {
            text: 'Firefly III',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/firefly-iii/triggers' },
              { text: 'Connection', link: '/apps/firefly-iii/connection' },
            ],
          },
          {
            text: 'Flickr',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/flickr/triggers' },
              { text: 'Connection', link: '/apps/flickr/connection' },
            ],
          },
          {
            text: 'Formatter',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/formatter/actions' },
              { text: 'Connection', link: '/apps/formatter/connection' },
            ],
          },
          {
            text: 'Frappe / ERPNext',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/frappe/actions' },
              { text: 'Connection', link: '/apps/frappe/connection' },
            ],
          },
          {
            text: 'Freescout',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/freescout/triggers' },
              { text: 'Connection', link: '/apps/freescout/connection' },
            ],
          },
          {
            text: 'Ghost',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/ghost/triggers' },
              { text: 'Connection', link: '/apps/ghost/connection' },
            ],
          },
          {
            text: 'Gitea',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/gitea/triggers' },
              { text: 'Actions', link: '/apps/gitea/actions' },
              { text: 'Connection', link: '/apps/gitea/connection' },
            ],
          },
          {
            text: 'GitHub',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/github/triggers' },
              { text: 'Actions', link: '/apps/github/actions' },
              { text: 'Connection', link: '/apps/github/connection' },
            ],
          },
          {
            text: 'GitLab',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/gitlab/triggers' },
              { text: 'Connection', link: '/apps/gitlab/connection' },
            ],
          },
          {
            text: 'Gmail',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/gmail/triggers' },
              { text: 'Connection', link: '/apps/gmail/connection' },
              { text: 'Actions', link: '/apps/gmail/actions' },
            ],
          },
          {
            text: 'Google Calendar',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/google-calendar/triggers' },
              { text: 'Connection', link: '/apps/google-calendar/connection' },
            ],
          },
          {
            text: 'Google Drive',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/google-drive/triggers' },
              { text: 'Connection', link: '/apps/google-drive/connection' },
            ],
          },
          {
            text: 'Google Forms',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/google-forms/triggers' },
              { text: 'Connection', link: '/apps/google-forms/connection' },
            ],
          },
          {
            text: 'Google Sheets',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/google-sheets/triggers' },
              { text: 'Actions', link: '/apps/google-sheets/actions' },
              { text: 'Connection', link: '/apps/google-sheets/connection' },
            ],
          },
          {
            text: 'Google Tasks',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/google-tasks/triggers' },
              { text: 'Actions', link: '/apps/google-tasks/actions' },
              { text: 'Connection', link: '/apps/google-tasks/connection' },
            ],
          },
          {
            text: 'HTTP Request',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/http-request/actions' },
              { text: 'Connection', link: '/apps/http-request/connection' },
            ],
          },
          {
            text: 'HubSpot',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/hubspot/actions' },
              { text: 'Connection', link: '/apps/hubspot/connection' },
            ],
          },
          {
            text: 'Invoice Ninja',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/invoice-ninja/triggers' },
              { text: 'Actions', link: '/apps/invoice-ninja/actions' },
              { text: 'Connection', link: '/apps/invoice-ninja/connection' },
            ],
          },
          {
            text: 'Jotform',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/jotform/triggers' },
              { text: 'Connection', link: '/apps/jotform/connection' },
            ],
          },
          {
            text: 'LibreTranslate',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/libretranslate/actions' },
              { text: 'Connection', link: '/apps/libretranslate/connection' },
            ],
          },
          {
            text: 'Mailchimp',
            collapsible: true,
            collapsed: true,
            items: [{ text: 'Connection', link: '/apps/mailchimp/connection' }],
          },
          {
            text: 'MailerLite',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/mailerlite/triggers' },
              { text: 'Connection', link: '/apps/mailerlite/connection' },
            ],
          },
          {
            text: 'Mattermost',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/mattermost/actions' },
              { text: 'Connection', link: '/apps/mattermost/connection' },
            ],
          },
          {
            text: 'Miro',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/miro/actions' },
              { text: 'Connection', link: '/apps/miro/connection' },
            ],
          },
          {
            text: 'Mistral AI',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/mistral-ai/actions' },
              { text: 'Connection', link: '/apps/mistral-ai/connection' },
            ],
          },
          {
            text: 'Monday',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/monday/triggers' },
              { text: 'Actions', link: '/apps/monday/actions' },
              { text: 'Connection', link: '/apps/monday/connection' },
            ],
          },
          {
            text: 'Notion',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/notion/triggers' },
              { text: 'Actions', link: '/apps/notion/actions' },
              { text: 'Connection', link: '/apps/notion/connection' },
            ],
          },
          {
            text: 'Ntfy',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/ntfy/actions' },
              { text: 'Connection', link: '/apps/ntfy/connection' },
            ],
          },
          {
            text: 'Odoo',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/odoo/actions' },
              { text: 'Connection', link: '/apps/odoo/connection' },
            ],
          },
          {
            text: 'OpenAI',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/openai/actions' },
              { text: 'Connection', link: '/apps/openai/connection' },
            ],
          },
          {
            text: 'OpenRouter',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/openrouter/actions' },
              { text: 'Connection', link: '/apps/openrouter/connection' },
            ],
          },
          {
            text: 'PDFMonkey',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/pdfmonkey/triggers' },
              { text: 'Actions', link: '/apps/pdfmonkey/actions' },
              { text: 'Connection', link: '/apps/pdfmonkey/connection' },
            ],
          },
          {
            text: 'Perplexity',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/perplexity/actions' },
              { text: 'Connection', link: '/apps/perplexity/connection' },
            ],
          },
          {
            text: 'Pipedrive',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/pipedrive/triggers' },
              { text: 'Actions', link: '/apps/pipedrive/actions' },
              { text: 'Connection', link: '/apps/pipedrive/connection' },
            ],
          },
          {
            text: 'Placetel',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/placetel/triggers' },
              { text: 'Connection', link: '/apps/placetel/connection' },
            ],
          },
          {
            text: 'PostgreSQL',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/postgresql/actions' },
              { text: 'Connection', link: '/apps/postgresql/connection' },
            ],
          },
          {
            text: 'Pushover',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/pushover/actions' },
              { text: 'Connection', link: '/apps/pushover/connection' },
            ],
          },
          {
            text: 'Reddit',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/reddit/triggers' },
              { text: 'Actions', link: '/apps/reddit/actions' },
              { text: 'Connection', link: '/apps/reddit/connection' },
            ],
          },
          {
            text: 'Remove.bg',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/removebg/actions' },
              { text: 'Connection', link: '/apps/removebg/connection' },
            ],
          },
          {
            text: 'RSS',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/rss/triggers' },
              { text: 'Connection', link: '/apps/rss/connection' },
            ],
          },
          {
            text: 'Salesforce',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/salesforce/triggers' },
              { text: 'Actions', link: '/apps/salesforce/actions' },
              { text: 'Connection', link: '/apps/salesforce/connection' },
            ],
          },
          {
            text: 'Scheduler',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/scheduler/triggers' },
              { text: 'Connection', link: '/apps/scheduler/connection' },
            ],
          },
          {
            text: 'SignalWire',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/signalwire/triggers' },
              { text: 'Actions', link: '/apps/signalwire/actions' },
              { text: 'Connection', link: '/apps/signalwire/connection' },
            ],
          },
          {
            text: 'Slack',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/slack/actions' },
              { text: 'Connection', link: '/apps/slack/connection' },
            ],
          },
          {
            text: 'SMTP',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/smtp/actions' },
              { text: 'Connection', link: '/apps/smtp/connection' },
            ],
          },
          {
            text: 'Spotify',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/spotify/actions' },
              { text: 'Connection', link: '/apps/spotify/connection' },
            ],
          },
          {
            text: 'Strava',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/strava/actions' },
              { text: 'Connection', link: '/apps/strava/connection' },
            ],
          },
          {
            text: 'Stripe',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/stripe/triggers' },
              { text: 'Connection', link: '/apps/stripe/connection' },
            ],
          },
          {
            text: 'SurveyMonkey',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/surveymonkey/triggers' },
              { text: 'Actions', link: '/apps/surveymonkey/actions' },
              { text: 'Connection', link: '/apps/surveymonkey/connection' },
            ],
          },
          {
            text: 'Telegram',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/telegram-bot/triggers' },
              { text: 'Actions', link: '/apps/telegram-bot/actions' },
              { text: 'Connection', link: '/apps/telegram-bot/connection' },
            ],
          },
          {
            text: 'Todoist',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/todoist/triggers' },
              { text: 'Actions', link: '/apps/todoist/actions' },
              { text: 'Connection', link: '/apps/todoist/connection' },
            ],
          },
          {
            text: 'Together AI',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/together-ai/actions' },
              { text: 'Connection', link: '/apps/together-ai/connection' },
            ],
          },
          {
            text: 'Trello',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/trello/actions' },
              { text: 'Connection', link: '/apps/trello/connection' },
            ],
          },
          {
            text: 'Twilio',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/twilio/triggers' },
              { text: 'Actions', link: '/apps/twilio/actions' },
              { text: 'Connection', link: '/apps/twilio/connection' },
            ],
          },
          {
            text: 'Twitter',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/twitter/triggers' },
              { text: 'Actions', link: '/apps/twitter/actions' },
              { text: 'Connection', link: '/apps/twitter/connection' },
            ],
          },
          {
            text: 'Typeform',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/typeform/triggers' },
              { text: 'Connection', link: '/apps/typeform/connection' },
            ],
          },
          {
            text: 'VirtualQ',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/virtualq/actions' },
              { text: 'Connection', link: '/apps/virtualq/connection' },
            ],
          },
          {
            text: 'Vtiger CRM',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/vtiger-crm/triggers' },
              { text: 'Actions', link: '/apps/vtiger-crm/actions' },
              { text: 'Connection', link: '/apps/vtiger-crm/connection' },
            ],
          },
          {
            text: 'Webhooks',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/webhooks/triggers' },
              { text: 'Connection', link: '/apps/webhooks/connection' },
            ],
          },
          {
            text: 'WordPress',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/wordpress/actions' },
              { text: 'Triggers', link: '/apps/wordpress/triggers' },
              { text: 'Connection', link: '/apps/wordpress/connection' },
            ],
          },
          {
            text: 'Xero',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/xero/triggers' },
              { text: 'Connection', link: '/apps/xero/connection' },
            ],
          },
          {
            text: 'You Need A Budget',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/you-need-a-budget/triggers' },
              {
                text: 'Connection',
                link: '/apps/you-need-a-budget/connection',
              },
            ],
          },
          {
            text: 'Youtube',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Triggers', link: '/apps/youtube/triggers' },
              { text: 'Connection', link: '/apps/youtube/connection' },
            ],
          },
          {
            text: 'Zendesk',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Actions', link: '/apps/zendesk/actions' },
              { text: 'Connection', link: '/apps/zendesk/connection' },
            ],
          },
        ],
        '/': [
          {
            text: 'Getting Started',
            collapsible: true,
            items: [
              {
                text: 'What is Automatisch?',
                link: '/',
                activeMatch: '/',
              },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Key concepts', link: '/guide/key-concepts' },
              { text: 'Create flow', link: '/guide/create-flow' },
            ],
          },
          {
            text: 'Integrations',
            collapsible: true,
            items: [
              { text: 'Available apps', link: '/guide/available-apps' },
              {
                text: 'Request integration',
                link: '/guide/request-integration',
              },
            ],
          },
          {
            text: 'Advanced',
            collapsible: true,
            items: [
              { text: 'Configuration', link: '/advanced/configuration' },
              { text: 'Credentials', link: '/advanced/credentials' },
              { text: 'Telemetry', link: '/advanced/telemetry' },
            ],
          },
          {
            text: 'Contributing',
            collapsible: true,
            items: [
              {
                text: 'Contribution guide',
                link: '/contributing/contribution-guide',
              },
              {
                text: 'Development setup',
                link: '/contributing/development-setup',
              },
              {
                text: 'Repository structure',
                link: '/contributing/repository-structure',
              },
            ],
          },
          {
            text: 'Build Integrations',
            collapsible: true,
            items: [
              {
                text: 'Folder structure',
                link: '/build-integrations/folder-structure',
              },
              {
                text: 'App',
                link: '/build-integrations/app',
              },
              {
                text: 'Global variable',
                link: '/build-integrations/global-variable',
              },
              {
                text: 'Auth',
                link: '/build-integrations/auth',
              },
              {
                text: 'Triggers',
                link: '/build-integrations/triggers',
              },
              {
                text: 'Actions',
                link: '/build-integrations/actions',
              },
              {
                text: 'Examples',
                link: '/build-integrations/examples',
              },
            ],
          },
          {
            text: 'Other',
            collapsible: true,
            items: [
              { text: 'License', link: '/other/license' },
              { text: 'Community', link: '/other/community' },
            ],
          },
        ],
      },
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/automatisch/automatisch',
        },
        { icon: 'twitter', link: 'https://twitter.com/automatischio' },
        { icon: 'discord', link: 'https://discord.gg/dJSah9CVrC' },
      ],
      editLink: {
        pattern:
          'https://github.com/automatisch/automatisch/edit/main/packages/docs/pages/:path',
        text: 'Edit this page on GitHub',
      },
      footer: {
        copyright: 'Copyright © 2022 Automatisch. All rights reserved.',
      },
      algolia: {
        appId: 'I7I8MRYC3P',
        apiKey: '9325eb970bdd6a70b1e35528b39ed2fe',
        indexName: 'automatisch',
      },
    },

    async transformHead(ctx) {
      if (ctx.pageData.relativePath === '') return; // Skip 404 page.

      const isHomepage = ctx.pageData.relativePath === 'index.md';
      let canonicalUrl = PROD_BASE_URL;

      if (!isHomepage) {
        canonicalUrl =
          `${canonicalUrl}/` + ctx.pageData.relativePath.replace('.md', '');
      }

      // Added for logging purposes to check if there is something
      // wrong with the canonical URL in the deployment pipeline.
      console.log('');
      console.log('File path: ', ctx.pageData.relativePath);
      console.log('Canonical URL: ', canonicalUrl);

      return [
        [
          'link',
          {
            rel: 'canonical',
            href: canonicalUrl,
          },
        ],
        [
          'script',
          {
            defer: true,
            'data-domain': 'automatisch.io',
            'data-api': 'https://automatisch.io/data/api/event',
            src: 'https://automatisch.io/data/js/script.js',
          },
        ],
      ];
    },

    async transformHtml(_, id, { pageData }) {
      if (!/[\\/]404\.html$/.test(id)) {
        let url = pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2');

        const isHomepage = url === '';

        if (isHomepage) {
          url = '/docs';
        }

        links.push({
          url,
          lastmod: pageData.lastUpdated,
        });
      }
    },

    async buildEnd({ outDir }) {
      const sitemap = new SitemapStream({
        hostname: `${PROD_BASE_URL}/`,
      });

      const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
      sitemap.pipe(writeStream);
      links.forEach((link) => sitemap.write(link));
      sitemap.end();
    },
  });
};
