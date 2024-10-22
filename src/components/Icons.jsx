const Icons = ({ icon, className, rotate, color }) => {
    switch (icon) {
        case "table":
            return (
                <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill={`${color ? color : "none"}`} xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_381_99" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20"  fill={`${color ? color : "#D9D9D9"}`} />
                    </mask>
                    <g mask="url(#mask0_381_99)">
                        <path d="M3.65278 6.44444V6.56944H3.77778H16.2222H16.3472V6.44444V3.77778V3.65278H16.2222H3.77778H3.65278V3.77778V6.44444ZM6.125 8.22222V8.09722H6H3.77778H3.65278V8.22222V16.2222V16.3472H3.77778H6H6.125V16.2222V8.22222ZM14 8.09722H13.875V8.22222V16.2222V16.3472H14H16.2222H16.3472V16.2222V8.22222V8.09722H16.2222H14ZM12.3472 8.22222V8.09722H12.2222H7.77778H7.65278V8.22222V16.2222V16.3472H7.77778H12.2222H12.3472V16.2222V8.22222ZM16.2222 17.875H3.77778C3.3223 17.875 2.9355 17.7143 2.61061 17.3894C2.28572 17.0645 2.125 16.6777 2.125 16.2222V3.77778C2.125 3.3223 2.28572 2.9355 2.61061 2.61061C2.9355 2.28572 3.3223 2.125 3.77778 2.125H16.2222C16.6777 2.125 17.0645 2.28572 17.3894 2.61061C17.7143 2.9355 17.875 3.3223 17.875 3.77778V16.2222C17.875 16.6777 17.7143 17.0645 17.3894 17.3894C17.0645 17.7143 16.6777 17.875 16.2222 17.875Z"   fill={`${color ? color : "#404040"}`} stroke="white" strokeWidth="0.25" />
                    </g>
                </svg>
            );
        case "search":
            return (
                <svg className={className} width="20" height="20" viewBox="0 0 20 20"  fill={`${color ? color : "none"}`} xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 17.1632L13.5307 12.6938C14.6047 11.4045 15.1402 9.75068 15.026 8.07649C14.9117 6.40231 14.1564 4.83663 12.9171 3.70516C11.6778 2.5737 10.0501 1.96357 8.37243 2.00168C6.69478 2.0398 5.09641 2.72324 3.90983 3.90983C2.72324 5.09641 2.0398 6.69478 2.00168 8.37243C1.96357 10.0501 2.5737 11.6778 3.70516 12.9171C4.83663 14.1564 6.40231 14.9117 8.07649 15.026C9.75068 15.1402 11.4045 14.6047 12.6938 13.5307L17.1632 18L18 17.1632ZM3.20478 8.53106C3.20478 7.47762 3.51716 6.44784 4.10242 5.57194C4.68768 4.69604 5.51953 4.01335 6.49278 3.61022C7.46603 3.20709 8.53697 3.10161 9.57017 3.30712C10.6034 3.51264 11.5524 4.01992 12.2973 4.76481C13.0422 5.50971 13.5495 6.45876 13.755 7.49195C13.9605 8.52515 13.855 9.59609 13.4519 10.5693C13.0488 11.5426 12.3661 12.3744 11.4902 12.9597C10.6143 13.545 9.5845 13.8573 8.53106 13.8573C7.11892 13.8558 5.76507 13.2941 4.76654 12.2956C3.76801 11.297 3.20635 9.9432 3.20478 8.53106Z"   fill={`${color ? color : "#BBBBBB"}`} />
                </svg>

            );

        case "calendar":
            return (
                <svg className={className} width="20" height="20" viewBox="0 0 20 20"   fill={`${color ? color : "none"}`}  xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_483_82" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20"   fill={`${color ? color : "#D9D9D9"}`} />
                    </mask>
                    <g mask="url(#mask0_483_82)">
                        <path d="M5.41667 3.7H5.51667V3.6V2.1H6.92778V3.6V3.7H7.02778H13.4722H13.5722V3.6V2.1H14.9833V3.6V3.7H15.0833H15.8889C16.3054 3.7 16.6594 3.84615 16.9563 4.14096C17.2531 4.43574 17.4 4.78696 17.4 5.2V16.4C17.4 16.813 17.2531 17.1643 16.9563 17.459C16.6594 17.7539 16.3054 17.9 15.8889 17.9H4.61111C4.19456 17.9 3.84058 17.7539 3.54373 17.459C3.2469 17.1643 3.1 16.813 3.1 16.4V5.2C3.1 4.78696 3.2469 4.43574 3.54373 4.14096C3.84058 3.84615 4.19456 3.7 4.61111 3.7H5.41667ZM4.51111 16.4V16.5H4.61111H15.8889H15.9889V16.4V8.4V8.3H15.8889H4.61111H4.51111V8.4V16.4ZM4.51111 6.8V6.9H4.61111H15.8889H15.9889V6.8V5.2V5.1H15.8889H4.61111H4.51111V5.2V6.8ZM10.25 11.5C10.0467 11.5 9.88118 11.4328 9.74651 11.299C9.61187 11.1653 9.54444 11.0013 9.54444 10.8C9.54444 10.5987 9.61187 10.4347 9.74651 10.301C9.88118 10.1672 10.0467 10.1 10.25 10.1C10.4533 10.1 10.6188 10.1672 10.7535 10.301C10.8881 10.4347 10.9556 10.5987 10.9556 10.8C10.9556 11.0013 10.8881 11.1653 10.7535 11.299C10.6188 11.4328 10.4533 11.5 10.25 11.5ZM7.02778 11.5C6.8245 11.5 6.65896 11.4328 6.52428 11.299C6.38965 11.1653 6.32222 11.0013 6.32222 10.8C6.32222 10.5987 6.38965 10.4347 6.52429 10.301C6.65896 10.1672 6.8245 10.1 7.02778 10.1C7.23105 10.1 7.3966 10.1672 7.53127 10.301C7.6659 10.4347 7.73333 10.5987 7.73333 10.8C7.73333 11.0013 7.6659 11.1653 7.53127 11.299C7.3966 11.4328 7.23105 11.5 7.02778 11.5ZM13.4722 11.5C13.2689 11.5 13.1034 11.4328 12.9687 11.299C12.8341 11.1653 12.7667 11.0013 12.7667 10.8C12.7667 10.5987 12.8341 10.4347 12.9687 10.301C13.1034 10.1672 13.2689 10.1 13.4722 10.1C13.6755 10.1 13.841 10.1672 13.9757 10.301C14.1103 10.4347 14.1778 10.5987 14.1778 10.8C14.1778 11.0013 14.1103 11.1653 13.9757 11.299C13.841 11.4328 13.6755 11.5 13.4722 11.5ZM10.25 14.7C10.0467 14.7 9.88118 14.6328 9.74651 14.499C9.61187 14.3653 9.54444 14.2013 9.54444 14C9.54444 13.7987 9.61187 13.6347 9.74651 13.501C9.88118 13.3672 10.0467 13.3 10.25 13.3C10.4533 13.3 10.6188 13.3672 10.7535 13.501C10.8881 13.6347 10.9556 13.7987 10.9556 14C10.9556 14.2013 10.8881 14.3653 10.7535 14.499C10.6188 14.6328 10.4533 14.7 10.25 14.7ZM7.02778 14.7C6.8245 14.7 6.65896 14.6328 6.52429 14.499C6.38965 14.3653 6.32222 14.2013 6.32222 14C6.32222 13.7987 6.38965 13.6347 6.52429 13.501C6.65896 13.3672 6.8245 13.3 7.02778 13.3C7.23105 13.3 7.3966 13.3672 7.53127 13.501C7.6659 13.6347 7.73333 13.7987 7.73333 14C7.73333 14.2013 7.6659 14.3653 7.53127 14.499C7.3966 14.6328 7.23105 14.7 7.02778 14.7ZM13.4722 14.7C13.2689 14.7 13.1034 14.6328 12.9687 14.499C12.8341 14.3653 12.7667 14.2013 12.7667 14C12.7667 13.7987 12.8341 13.6347 12.9687 13.501C13.1034 13.3672 13.2689 13.3 13.4722 13.3C13.6755 13.3 13.841 13.3672 13.9757 13.501C14.1103 13.6347 14.1778 13.7987 14.1778 14C14.1778 14.2013 14.1103 14.3653 13.9757 14.499C13.841 14.6328 13.6755 14.7 13.4722 14.7Z" fill={`${color ? color : "#BBBBBB"}`} stroke="white" strokeWidth="0.2" />
                    </g>
                </svg>

            );

        case "triangle":
            return (
                <svg  className={className} width="16" height="16" viewBox="0 0 16 16" transform={`rotate(${rotate ? 180 : 0})`}  fill={`${color ? color : "none"}`}  xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5714 6C10.651 6 10.729 6.02069 10.7967 6.05974C10.8644 6.09879 10.9192 6.15467 10.9548 6.22111C10.9903 6.28756 11.0054 6.36194 10.9983 6.43592C10.9911 6.50991 10.962 6.58057 10.9143 6.64L8.34286 9.84C8.30294 9.88968 8.25117 9.93 8.19166 9.95777C8.13215 9.98554 8.06653 10 8 10C7.93347 10 7.86785 9.98554 7.80834 9.95777C7.74883 9.93 7.69706 9.88968 7.65714 9.84L5.08572 6.64C5.03796 6.58057 5.00888 6.50991 5.00173 6.43592C4.99458 6.36194 5.00965 6.28756 5.04525 6.22112C5.08084 6.15467 5.13555 6.09879 5.20326 6.05974C5.27096 6.02069 5.34898 6 5.42857 6L10.5714 6Z"   fill={`${color ? color : "#747474"}`} />
                </svg>


            );
        case "upload":
            return (
                <svg className={className}  width="24" height="24" viewBox="0 0 24 24"  fill={`${color ? color : "none"}`}  xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 18.15H18.15V18V15.15H19.85V18C19.85 19.0172 19.0172 19.85 18 19.85H6C4.98284 19.85 4.15 19.0172 4.15 18V15.15H5.85V18V18.15H6H18ZM12.85 7.83V15.85H11.15V7.83V7.46886L10.8941 7.72373L8.4102 10.1981L7.21213 9L12 4.21213L16.7879 9L15.5898 10.1981L13.1059 7.72373L12.85 7.46886V7.83Z"   fill={`${color ? color : "#0076F5"}`} stroke="white" strokeWidth="0.3" />
                </svg>



            );
        default:
            return null;
    }
};

export default Icons;