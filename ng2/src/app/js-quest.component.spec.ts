import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { JsQuestAppComponent } from '../app/js-quest.component';

beforeEachProviders(() => [JsQuestAppComponent]);

describe('App: JsQuest', () => {
  it('should create the app',
      inject([JsQuestAppComponent], (app: JsQuestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'js-quest works!\'',
      inject([JsQuestAppComponent], (app: JsQuestAppComponent) => {
    expect(app.title).toEqual('js-quest works!');
  }));
});
