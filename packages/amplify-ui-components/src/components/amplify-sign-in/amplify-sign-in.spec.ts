import { newSpecPage } from '@stencil/core/testing';
import { AmplifySignIn } from './amplify-sign-in';
// import { AmplifyForgotPasswordHint } from './amplify-forgot-password-hint';
// import Tunnel from '../../data/auth-state';

describe('amplify-sign-in spec:', () => {
  describe('Component logic ->', () => {
    let signIn;

    beforeEach(() => {
      signIn = new AmplifySignIn();
    });

    // https://github.com/facebook/jest/issues/8475
    // it('should render `SIGN IN COMPONENTS` on form fields by default', () => {
    //   const result = [
    //     {
    //       type: 'username',
    //       required: true,
    //     },
    //     {
    //       type: 'password',
    //       hint: {
    //         "$attrs$": null,
    //         "$children$": [AmplifyForgotPasswordHint],
    //         "$elm$": undefined,
    //         "$flags$": 0,
    //         "$tag$": Tunnel.Consumer
    //       },
    //       required: true,
    //     }
    //   ];

    //   expect(signIn.formFields).toEqual(result);
    // });

    it('should render `handleSubmit` as defined by default', () => {
      expect(signIn.handleSubmit).toBeDefined();
    });

    it('should render `validationErrors` as undefined by default', () => {
      expect(signIn.validationErrors).toBeUndefined();
    });

    it('should render `headerText` to `Sign into your account` by default', () => {
      expect(signIn.headerText).toEqual('Sign into your account');
    });

    it('should render `submitButtonText` to `Sign in` by default', () => {
      expect(signIn.submitButtonText).toEqual('Sign in');
    });

    it('should render `overrideStyle` to false by default', () => {
      expect(signIn.overrideStyle).toBe(false);
    });
  });
  describe('Render logic ->', () => {
    it('should render a `sign in` form by default', async () => {
      const page = await newSpecPage({
        components: [AmplifySignIn],
        html: `<amplify-sign-in></amplify-sign-in>`
      });

      expect(page.root).toMatchSnapshot();
    });
  });
});