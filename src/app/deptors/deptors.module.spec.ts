import { DeptorsModule } from './deptors.module';

describe('DeptorsModule', () => {
  let deptorsModule: DeptorsModule;

  beforeEach(() => {
    deptorsModule = new DeptorsModule();
  });

  it('should create an instance', () => {
    expect(deptorsModule).toBeTruthy();
  });
});
