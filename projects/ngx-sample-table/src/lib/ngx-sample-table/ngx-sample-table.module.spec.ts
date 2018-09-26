import { NgxSampleTableModule } from './ngx-sample-table.module';

describe('NgxSampleTableModule', () => {
  let ngxSampleTableModule: NgxSampleTableModule;

  beforeEach(() => {
    ngxSampleTableModule = new NgxSampleTableModule();
  });

  it('should create an instance', () => {
    expect(ngxSampleTableModule).toBeTruthy();
  });
});
