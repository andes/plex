import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NotificationEvent } from '../interfaces/notification-event.type';
import { Notification } from '../interfaces/notification.type';
import { Icons, defaultIcons } from '../interfaces/icons';

@Injectable()
export class NotificationsService {

    private emitter: Subject<NotificationEvent> = new Subject<NotificationEvent>();
    private icons: Icons = defaultIcons;

    set(notification: Notification, to: boolean) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        notification.click = new EventEmitter<{}>();
        this.emitter.next({ command: 'set', notification, add: to });
        return notification;
    }

    getChangeEmitter() {
        return this.emitter;
    }

  //// Access methods
    success(title: string, content?: string, override?: any) {
        return this.set({ title, content: content || '', type: 'success', icon: this.icons.success, override }, true);
    }

    error(title: string, content?: string, override?: any) {
        return this.set({ title, content: content || '', type: 'error', icon: this.icons.error, override }, true);
    }

    alert(title: string, content?: string, override?: any) {
        return this.set({ title, content: content || '', type: 'alert', icon: this.icons.alert, override }, true);
    }

    info(title: string, content?: string, override?: any) {
        return this.set({ title, content: content || '', type: 'info', icon: this.icons.info, override }, true);
    }

    warn(title: string, content?: string, override?: any) {
        return this.set({ title, content: content || '', type: 'warn', icon: this.icons.warn, override }, true);
    }

    bare(title: string, content?: string, override?: any) {
        return this.set({ title, content: content || '', type: 'bare', icon: 'bare', override }, true);
    }

  // With type method
    create(title: string, content = '', type = 'success', override?: any) {
        return this.set({ title, content, type, icon: 'bare', override }, true);
    }

  // HTML Notification method
    html(html: any, type = 'success', override?: any) {
        return this.set({ html, type, icon: 'bare', override }, true);
    }

  // Remove all notifications method
    remove(id?: string) {
        if (id) {
            this.emitter.next({ command: 'clean', id });
        } else {
            this.emitter.next({ command: 'cleanAll' });
        }
    }
}
