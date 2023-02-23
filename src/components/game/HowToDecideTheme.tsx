import axios from "axios";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useRecoilValue } from "recoil";

import {
  Button,
  Center,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";

import { VSpacer } from "@/components/common/Spacer";

import { BASE_URL } from "@/data/BaseUrl";

import { RecoilRoom } from "@/store/Recoil";

import { HandleError } from "@/hooks/useError";

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

export const HowToDecideTheme = ({ setStep }: Props) => {
  const [value, setValue] = useState<string>("0");
  const room = useRecoilValue(RecoilRoom);
  const router = useRouter();

  const hoWToChoice = () => {
    const url = BASE_URL + "how-decide-theme";
    axios
      .post(url, {
        roomId: room.id,
        HowToDecideTheme: Number(value),
      })
      .then((res) => {
        if (res.status === 200) {
          if (value === "0") {
            setStep(2);
          } else {
            setStep(3);
          }
        }
      })
      .catch((err) => {
        HandleError(router, err);
      });
  };

  return (
    <>
      <Center>
        <VStack>
          <VSpacer size={8} />
          <Text fontSize="xl">あなたはヒントホルダーです！</Text>
          <VSpacer size={12} />
          <Text fontSize="xl">お題の決定方法</Text>
          <VSpacer size={12} />
          <RadioGroup onChange={setValue} value={value}>
            <VStack>
              <Radio value="0" size="lg">
                自分たちで決める
              </Radio>
              <Radio value="1" size="lg">
                ランダムで決める
              </Radio>
            </VStack>
          </RadioGroup>
          <VSpacer size={12} />
          <Button colorScheme="pink" size="lg" minW={48} onClick={hoWToChoice}>
            決定
          </Button>
          <VSpacer size={12} />
        </VStack>
      </Center>
    </>
  );
};
