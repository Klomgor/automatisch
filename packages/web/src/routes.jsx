import { useEffect } from 'react';
import {
  Navigate,
  Routes as ReactRouterRoutes,
  Route,
  useNavigate,
} from 'react-router-dom';

import AdminSettingsLayout from 'components/AdminSettingsLayout';
import Layout from 'components/Layout';
import NoResultFound from 'components/NotFound';
import PublicLayout from 'components/PublicLayout';
import * as URLS from 'config/urls';
import useAuthentication from 'hooks/useAuthentication';
import useAutomatischConfig from 'hooks/useAutomatischConfig';
import useAutomatischInfo from 'hooks/useAutomatischInfo';
import AcceptInvitation from 'pages/AcceptInvitation';
import Application from 'pages/Application';
import Applications from 'pages/Applications';
import CreateForm from 'pages/CreateForm/index.ee';
import EditForm from 'pages/EditForm/index.ee';
import EditorRoutes from 'pages/Editor/routes';
import Execution from 'pages/Execution';
import Executions from 'pages/Executions';
import Flows from 'pages/Flows';
import ForgotPassword from 'pages/ForgotPassword/index.ee';
import FormFlow from 'pages/FormFlow/index.ee';
import Forms from 'pages/Forms/index.ee';
import Installation from 'pages/Installation';
import Login from 'pages/Login';
import LoginCallback from 'pages/LoginCallback';
import Notifications from 'pages/Notifications';
import ResetPassword from 'pages/ResetPassword/index.ee';
import SignUp from 'pages/SignUp/index.ee';
import adminSettingsRoutes from './adminSettingsRoutes';
import settingsRoutes from './settingsRoutes';

function Routes() {
  const navigate = useNavigate();
  const { data: automatischInfo, isSuccess } = useAutomatischInfo();
  const { isAuthenticated } = useAuthentication();
  const { data: configData } = useAutomatischConfig();

  const config = configData?.data;

  const installed = isSuccess
    ? automatischInfo.data.installationCompleted
    : true;

  const isEnterprise = isSuccess ? automatischInfo.data.isEnterprise : false;

  useEffect(() => {
    if (!installed) {
      navigate(URLS.INSTALLATION, { replace: true });
    }
  }, []);

  return (
    <ReactRouterRoutes>
      <Route
        path={URLS.EXECUTIONS}
        element={
          <Layout>
            <Executions />
          </Layout>
        }
      />

      <Route
        path={URLS.EXECUTION_PATTERN}
        element={
          <Layout>
            <Execution />
          </Layout>
        }
      />

      <Route
        path={`${URLS.FLOWS}/*`}
        element={
          <Layout>
            <Flows />
          </Layout>
        }
      />

      {isEnterprise && (
        <Route
          path={`${URLS.FORMS}/*`}
          element={
            <Layout>
              <Forms />
            </Layout>
          }
        />
      )}

      {isEnterprise && (
        <Route
          path={URLS.CREATE_FORM}
          element={
            <Layout>
              <CreateForm />
            </Layout>
          }
        />
      )}

      {isEnterprise && (
        <Route
          path={URLS.FORM_PATTERN}
          element={
            <Layout>
              <EditForm />
            </Layout>
          }
        />
      )}

      <Route
        path={`${URLS.APPS}/*`}
        element={
          <Layout>
            <Applications />
          </Layout>
        }
      />

      <Route
        path={`${URLS.APP_PATTERN}/*`}
        element={
          <Layout>
            <Application />
          </Layout>
        }
      />

      <Route path={`${URLS.EDITOR}/*`} element={<EditorRoutes />} />

      <Route
        path={URLS.LOGIN}
        element={
          <PublicLayout>
            <Login />
          </PublicLayout>
        }
      />

      <Route path={URLS.LOGIN_CALLBACK} element={<LoginCallback />} />

      <Route
        path={URLS.SIGNUP}
        element={
          <PublicLayout>
            <SignUp />
          </PublicLayout>
        }
      />

      <Route
        path={URLS.ACCEPT_INVITATON}
        element={
          <PublicLayout>
            <AcceptInvitation />
          </PublicLayout>
        }
      />

      <Route
        path={URLS.FORGOT_PASSWORD}
        element={
          <PublicLayout>
            <ForgotPassword />
          </PublicLayout>
        }
      />

      <Route
        path={URLS.RESET_PASSWORD}
        element={
          <PublicLayout>
            <ResetPassword />
          </PublicLayout>
        }
      />

      {!installed && (
        <Route
          path={URLS.INSTALLATION}
          element={
            <PublicLayout>
              <Installation />
            </PublicLayout>
          }
        />
      )}

      {!config?.disableNotificationsPage && (
        <Route
          path={URLS.UPDATES}
          element={
            <Layout>
              <Notifications />
            </Layout>
          }
        />
      )}

      <Route
        path="/"
        element={
          <Navigate to={isAuthenticated ? URLS.FLOWS : URLS.LOGIN} replace />
        }
      />

      <Route path={URLS.SETTINGS}>{settingsRoutes}</Route>

      <Route path={URLS.PUBLIC_FORM_PATTERN} element={<FormFlow />} />

      <Route path={URLS.ADMIN_SETTINGS} element={<AdminSettingsLayout />}>
        {adminSettingsRoutes}
      </Route>

      <Route path="*" element={<NoResultFound />} />
    </ReactRouterRoutes>
  );
}

export default <Routes />;
