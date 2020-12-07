import {
  InviteFriendButton,
  submitRegisterButton,
} from './src/GetHtmlElements';
import InviteAFriend from './src/InviteFriend';

// eslint-disable-next-line no-unused-vars
import LoadProductslist from './src/LoadProductList';

import SignUp from './src/SignUp';

submitRegisterButton.onclick = SignUp;

InviteFriendButton.onclick = InviteAFriend;
