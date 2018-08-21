import { UserStoriesModule } from './user-stories.module';

describe('UserStoriesModule', () => {
  let userStoriesModule: UserStoriesModule;

  beforeEach(() => {
    userStoriesModule = new UserStoriesModule();
  });

  it('should create an instance', () => {
    expect(userStoriesModule).toBeTruthy();
  });
});
