import React, { Dispatch, SetStateAction } from "react";

import { SpinnerIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Center,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { VSpacer } from "@/components/common/Spacer";

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  hintList: {
    key: string;
    hint: string;
    isDelete: boolean;
  }[];
};

export const AnswerWait = ({ hintList }: Props) => {
  return (
    <>
      <VSpacer size={4} />
      <Center>
        <VStack align="hint">
          <HStack>
            <Text fontSize={24}>ゲッサーが入力しています</Text>
            <Button isLoading colorScheme="gray"></Button>
          </HStack>
          <VSpacer size={4} />
          {hintList.map((hint, i) => {
            return (
              <Card key={i}>
                <CardBody boxShadow={"dark-lg"}>
                  {hint.isDelete ? (
                    <Text color={"red"}>{"同担拒否"}</Text>
                  ) : (
                    <Text color={"blue"}>{hint.hint}</Text>
                  )}
                </CardBody>
              </Card>
            );
          })}

          <VSpacer size={12} />
        </VStack>
      </Center>
    </>
  );
};