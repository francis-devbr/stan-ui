import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProjectDashboardDb } from 'app/fake-db/dashboard-project';
import { AnalyticsDashboardDb } from 'app/fake-db/dashboard-analytics';
import { CalendarFakeDb } from 'app/fake-db/calendar';
import { FrotaFakeDb } from 'app/fake-db/frota';
import { AuthenticationFakeDb } from 'app/fake-db/authentication';
import { MailFakeDb } from 'app/fake-db/mail';
import { EmpresaFakeDb } from 'app/fake-db/empresa';
import { FileManagerFakeDb } from 'app/fake-db/file-manager';
import { ContactsFakeDb } from 'app/fake-db/contacts';
import { TodoFakeDb } from 'app/fake-db/todo';
import { ScrumboardFakeDb } from 'app/fake-db/scrumboard';
import { InvoiceFakeDb } from 'app/fake-db/invoice';
import { ProfileFakeDb } from 'app/fake-db/profile';
import { SearchFakeDb } from 'app/fake-db/search';
import { FaqFakeDb } from 'app/fake-db/faq';
import { KnowledgeBaseFakeDb } from 'app/fake-db/knowledge-base';
import { IconsFakeDb } from 'app/fake-db/icons';
import { ChatPanelFakeDb } from 'app/fake-db/chat-panel';
import { QuickPanelFakeDb } from 'app/fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'project-dashboard-projects' : ProjectDashboardDb.projects,
            'project-dashboard-widgets'  : ProjectDashboardDb.widgets,
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Calendar
            'calendar': CalendarFakeDb.data,

            // Veículos
            'frota-veiculos' : FrotaFakeDb.veiculos,

            // Manutenções
            'frota-manutencoes' : FrotaFakeDb.manutencoes,
            

            // Academy
            'authentication-token': AuthenticationFakeDb.token,
           

            // Mail
            'mail-mails'  : MailFakeDb.mails,
            'mail-folders': MailFakeDb.folders,
            'mail-filters': MailFakeDb.filters,
            'mail-labels' : MailFakeDb.labels,

            // Chat
            'empresa-empresas': EmpresaFakeDb.empresas,

            // File Manager
            'file-manager': FileManagerFakeDb.files,

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

            // Todo
            'todo-todos'  : TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags'   : TodoFakeDb.tags,

            // Scrumboard
            'scrumboard-boards': ScrumboardFakeDb.boards,

            // Invoice
            'invoice': InvoiceFakeDb.invoice,

            // Profile
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,

            // Search
            'search': SearchFakeDb.search,

            // FAQ
            'faq': FaqFakeDb.data,

            // Knowledge base
            'knowledge-base': KnowledgeBaseFakeDb.data,

            // Icons
            'icons': IconsFakeDb.icons,

            // Chat Panel
            'chat-panel-contacts' : ChatPanelFakeDb.contacts,
            'chat-panel-chats': ChatPanelFakeDb.chats,
            'chat-panel-user': ChatPanelFakeDb.user,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
