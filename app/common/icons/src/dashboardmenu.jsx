import BaseIcon from "../base-icon";



export default function SvgIcon(props) {
  return (
    <BaseIcon {...props}>
      <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24"/></mask><g mask="url(#a)"><rect x=".75" y=".75" width="22.5" height="22.5" rx="7.25"/><mask id="b" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V15.25C24 19.6683 20.4183 23.25 16 23.25H8C3.58172 23.25 0 19.6683 0 15.25V8Z"/></mask><g mask="url(#b)"><path d="M12 14.625C14.4853 14.625 16.5 12.6103 16.5 10.125C16.5 7.63972 14.4853 5.625 12 5.625C9.51472 5.625 7.5 7.63972 7.5 10.125C7.5 12.6103 9.51472 14.625 12 14.625Z"/><path d="M12.0058 16.5938C7.45874 16.5938 3.75577 19.7438 3.75577 23.625V24.0938H20.2558V23.625C20.2558 19.7438 16.5528 16.5938 12.0058 16.5938Z"/></g></g>
    </BaseIcon>
  );
}