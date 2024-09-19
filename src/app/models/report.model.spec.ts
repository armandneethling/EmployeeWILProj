import { Report } from './report.model';

describe('Report Interface', () => {
  it('should have the correct properties', () => {
    const report: Report = {
      id: 1,
      title: 'Annual Report',
      content: 'Content of the report',
      createdById: 1,
      createdBy: undefined
    };

    expect(report).toBeDefined();
    expect(report.id).toBe(1);
    expect(report.title).toBe('Annual Report');
    expect(report.content).toBe('Content of the report');
    expect(report.createdById).toBe(1);
    expect(report.createdBy).toBeUndefined();
  });
});
