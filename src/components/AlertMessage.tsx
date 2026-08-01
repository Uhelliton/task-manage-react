import {JSX} from "react";

type AlertMessageProps = {
  title: string;
  description?: string;
  type: 'success' | 'error' | 'warning' | 'info';
};

export const AlertMessage = (props: AlertMessageProps) : JSX.Element => {
  const { title, description, type } = props;
  
  return (
    <div className="p-4 mb-4 text-sm text-fg-warning rounded-base bg-orange-100" role="alert">
      <span className="font-medium">Warning alert!</span> {title}
    </div>
  )
}