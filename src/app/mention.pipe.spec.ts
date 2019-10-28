import { MentionPipe } from './mention.pipe';

describe('MonsionPipe', () => {
  it('create an instance', () => {
    const pipe = new MentionPipe();
    expect(pipe).toBeTruthy();
  });
});
