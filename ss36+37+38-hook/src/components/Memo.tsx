import React, { memo } from "react";

interface Props {
  // count: number;
  name: string;
  increase: Function;
}

function Memo(props: Props) {
  console.log("component memo được gọi");

  return (
    <div>
      Memo
      {/* 
      Memo là:
        + HOC: higher order component là hàm bậc cao trong trong javascript
        + kiểm tra xem có props nào thay đổi hay không
        + nếu props (giá trị truyền vào từ cha xuống con) thay đổi thì component sẽ render
        + nếu props ko thay đổi thì không render
        + chỉ cần 1 props thay đổi thì component sẽ được render theo chứ ko phải là 
          tất cả các props phải thay đổi thì mới render
    */}
    </div>
  );
}

export default memo(Memo);
