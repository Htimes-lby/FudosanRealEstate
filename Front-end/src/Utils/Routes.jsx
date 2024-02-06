import { useCookies } from "react-cookie";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: InternalComponent, ...rest }) => {
    const [cookies] = useCookies(["token"]);
  
    const renderComponent = (props) => {
      const token = cookies.token;
      return token ? (
        <InternalComponent {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      );
    };
  
    return <Route {...rest} render={renderComponent} />;
  };

// export const PrivateRoute = ({ component: InternalComponent, ...rest }) => (
//     <Route
//         {...rest}
//         render={(props) => {

//             const token = localStorage.getItem("token");
//             return token ? (
//                 <InternalComponent {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: "/login",
//                         state: { from: props.location },
//                     }}
//                 />
//             )
//         }} 
//     />
// );

export const PublicRoute = ({ component: InternalComponent, ...rest }) => (
    <Route
    {...rest}
    render={(props) => {
        const token = localStorage.getItem("token");
        return token ? (
            <InternalComponent {...props} />
        ) : (
            <Redirect
            to={{
                pathname: "/dashboard",
                state: { from: props.location },
            }}
            />
        )
    }}
    />
);